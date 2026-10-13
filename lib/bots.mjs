/**
 * lib/bots.mjs — experimental management-bot intake sidecar.
 *
 * A management bot (GitBot, OpenDots, a commercial service, a custom adapter)
 * may request work. It may never *own* work. ACE stays authoritative for
 * canonical task ids and lifecycle, the project budget, workspace assignment,
 * dispatch, handoffs, integration, verification, permissions and audit events.
 *
 * The feature flag `experimental.management_bots.enabled` defaults to false and
 * this module fails closed: with the flag off, or with an incomplete security
 * configuration, every request is refused and no task is created.
 *
 * The inbound payload is untrusted: it is validated first, then sanitized with
 * redactSecrets() before any of it becomes durable state.
 *
 * Zero dependencies. Node builtins only.
 */

import fs from "node:fs";
import path from "node:path";
import { resolveAdapter } from "./adapters/index.mjs";
import { canStart } from "./crew.mjs";
import * as rt from "./runtime.mjs";

export const INTAKE_CODES = [
  "BOTS_DISABLED",
  "BOTS_MISCONFIGURED",
  "UNAUTHORIZED",
  "UNKNOWN_PROJECT",
  "BAD_REQUEST",
  "DUPLICATE",
  "APPROVAL_REQUIRED",
  "BUDGET_EXHAUSTED",
  "ACCEPTED",
];

function botsConfig(config) {
  const bots = config?.experimental?.management_bots;
  return bots && typeof bots === "object" ? bots : null;
}

function botsDir(dir, sub) {
  return path.join(dir, ".ace", "bots", sub);
}

function inboxPath(dir, requestId) {
  return path.join(botsDir(dir, "inbox"), `${requestId}.json`);
}

function deliveriesPath(dir, requestId) {
  return path.join(botsDir(dir, "deliveries"), `${requestId}.json`);
}

function readJson(p) {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

function writeJson(p, obj) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + "\n", "utf8");
}

function listJson(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((n) => n.endsWith(".json"))
    .map((n) => readJson(path.join(dir, n)))
    .filter(Boolean);
}

function refuse(code, reason, extra = {}) {
  return { accepted: false, code, taskId: null, duplicate: false, reason, ...extra };
}

/**
 * The connection state a human needs before trusting this sidecar.
 * `failClosed` is always true: an incomplete connection refuses requests
 * rather than accepting them unauthenticated.
 */
export function botStatus(config, env = process.env) {
  const bots = botsConfig(config);
  const enabled = bots?.enabled === true;
  const provider = bots?.provider ?? "gitbot";
  const { adapter, ok, reason } = resolveAdapter("management-bot", provider);

  const configured = Boolean(
    bots &&
      typeof bots.endpoint === "string" &&
      bots.endpoint.length > 0 &&
      typeof bots.identity === "string" &&
      bots.identity.length > 0 &&
      bots.projects &&
      typeof bots.projects === "object" &&
      Object.keys(bots.projects).length > 0,
  );

  let validate = { ok: false, errors: [reason ?? "adapter unavailable"] };
  let health = { ok: false, detail: reason ?? "adapter unavailable" };
  if (ok) {
    validate = adapter.validate(bots ?? {});
    health = adapter.health(env, bots ?? {});
  }

  const ready = enabled && ok && validate.ok && health.ok;
  return {
    enabled,
    provider,
    adapter: adapter?.name ?? null,
    ready,
    failClosed: true,
    enabledBy: enabled ? "experimental.management_bots.enabled" : null,
    connection: {
      configured,
      ok: Boolean(health.ok),
      detail: health.detail ?? (validate.errors ?? []).join("; "),
    },
    projects: bots?.projects ?? {},
    permissions: Array.isArray(bots?.permissions) ? [...bots.permissions] : [],
    approvals: Array.isArray(bots?.approvals) ? [...bots.approvals] : [],
    reason: !enabled
      ? "disabled by default — set experimental.management_bots.enabled: true to allow inbound requests"
      : ready
        ? `connected: ${provider} intake is accepting requests through ACE`
        : `not ready: ${(validate.errors ?? [health.detail]).join("; ")}`,
  };
}

/** Sanitize untrusted inbound text before it can become durable state. */
function safePayload(dir, request) {
  const redacted = rt.redactSecrets(dir, {
    request_id: request.request_id,
    title: request.title,
    goal: request.goal ?? null,
    acceptance_criteria: Array.isArray(request.acceptance_criteria) ? request.acceptance_criteria : [],
    requester: request.requester?.id ?? null,
    source: request.source ?? null,
    project: request.project ?? null,
  });
  return { ...redacted, acceptance_criteria: redacted.acceptance_criteria ?? [] };
}

/**
 * Record one delivery attempt. A delivery failure is reported, never allowed to
 * undo the task, and never allowed to throw out of intake.
 */
function attemptDelivery(dir, bots, deliverFn, payload, { attempt, nowMs }) {
  const max = bots?.delivery?.max_attempts ?? 3;
  const backoff = bots?.delivery?.backoff_seconds ?? 30;

  let raw;
  if (typeof deliverFn !== "function") {
    raw = { ok: false, detail: "no delivery function configured — the request is recorded and can be retried" };
  } else {
    try {
      raw = deliverFn(rt.redactSecrets(dir, payload)) ?? {};
    } catch (err) {
      raw = { ok: false, detail: String((err && err.message) || err) };
    }
  }

  const ok = raw.ok === true;
  const nextRetryAt = ok || attempt >= max ? null : new Date(nowMs + backoff * 1000).toISOString();
  rt.journalAction(dir, {
    type: ok ? "bot.delivered" : "bot.delivery_failed",
    subject: payload.taskId ?? null,
    attempts: attempt,
    maxAttempts: max,
    nextRetryAt,
  });

  return {
    ok,
    attempts: attempt,
    maxAttempts: max,
    detail: raw.detail ?? null,
    lastError: ok ? null : raw.detail ?? "delivery failed",
    nextRetryAt,
  };
}

/**
 * Intake one request.
 *
 * Checks run in order and the first failure wins. Nothing is created on a
 * refusal — in particular a request that would exceed the active-agent budget
 * is refused instead of spawning an unaccounted group of agents.
 *
 * opts: { apply = true, deliver?, env?, nowMs? }
 */
export function intake(dir, config, request = {}, opts = {}) {
  const apply = opts.apply !== false;
  const nowMs = opts.nowMs ?? Date.now();
  const bots = botsConfig(config);

  if (!bots || bots.enabled !== true) {
    return refuse(
      "BOTS_DISABLED",
      "experimental.management_bots.enabled is false — the management-bot sidecar is off by default and no task was created",
    );
  }

  const provider = bots.provider ?? "gitbot";
  const { adapter, ok, reason } = resolveAdapter("management-bot", provider);
  if (!ok) return refuse("BOTS_MISCONFIGURED", `management-bot provider "${provider}" is unavailable: ${reason}`);

  const verdict = adapter.validate(bots);
  if (!verdict.ok) {
    return refuse(
      "BOTS_MISCONFIGURED",
      `management-bot ${provider} is incompletely configured: ${verdict.errors.join("; ")} — refusing rather than accepting unauthenticated work`,
    );
  }

  const requesterId =
    request.requester && typeof request.requester.id === "string" && request.requester.id.length > 0
      ? request.requester.id
      : null;
  if (!requesterId) return refuse("UNAUTHORIZED", "the request carries no requester identity");

  const source = request.source ?? provider;
  const permissions = Array.isArray(bots.permissions) ? bots.permissions : [];
  if (source !== provider && !permissions.includes(source)) {
    return refuse(
      "UNAUTHORIZED",
      `source "${source}" is neither the configured provider (${provider}) nor listed in experimental.management_bots.permissions`,
    );
  }

  const projects = bots.projects ?? {};
  const mapped = typeof request.project === "string" ? projects[request.project] : undefined;
  if (typeof mapped !== "string" || mapped.length === 0) {
    return refuse(
      "UNKNOWN_PROJECT",
      `project ${JSON.stringify(request.project)} is not mapped in experimental.management_bots.projects (known inbound projects: ${Object.keys(projects).join(", ") || "none"})`,
    );
  }

  if (typeof request.request_id !== "string" || request.request_id.trim().length === 0) {
    return refuse("BAD_REQUEST", "request_id must be a non-empty string so a retry cannot create a second task");
  }
  if (typeof request.title !== "string" || request.title.trim().length === 0) {
    return refuse("BAD_REQUEST", "title must be a non-empty string");
  }

  const seen = readJson(inboxPath(dir, request.request_id));
  if (seen) {
    return {
      accepted: false,
      code: "DUPLICATE",
      taskId: seen.taskId ?? null,
      duplicate: true,
      reason: `request_id "${request.request_id}" was already handled (task ${seen.taskId}) — no second task was created`,
    };
  }

  const approvals = Array.isArray(bots.approvals) ? bots.approvals : [];
  if (request.action && approvals.includes(request.action) && request.approved !== true) {
    return refuse(
      "APPROVAL_REQUIRED",
      `action "${request.action}" requires an explicit approval the request does not carry`,
    );
  }

  const runtime = config?.adapters?.["agent-runtime"]?.provider ?? "local";
  const budget = canStart(config, rt.getAgentRecords(dir), { runtime });
  if (!budget.allowed) {
    return refuse(
      "BUDGET_EXHAUSTED",
      `refused: ${budget.reason}. ACE does not let an inbound request bypass the active-agent budget.`,
    );
  }

  const payload = safePayload(dir, request);
  const priority = typeof request.priority === "string" ? request.priority : "normal";

  if (!apply) {
    return {
      accepted: true,
      code: "ACCEPTED",
      taskId: null,
      duplicate: false,
      planned: true,
      delivery: null,
      reason: `dry run: every check passed (project ${mapped}, runtime ${runtime}); nothing was written`,
    };
  }

  const task = rt.createTask(dir, {
    title: payload.title,
    goal: payload.goal,
    project: mapped,
    priority,
    acceptance_criteria: payload.acceptance_criteria,
    origin: `bot:${provider}`,
    by: `bot:${requesterId}`,
  });

  writeJson(inboxPath(dir, request.request_id), {
    request_id: request.request_id,
    taskId: task.id,
    project: mapped,
    source,
    requester: requesterId,
    at: new Date(nowMs).toISOString(),
  });

  rt.journalAction(dir, {
    type: "bot.intake",
    subject: task.id,
    request_id: request.request_id,
    project: mapped,
    source,
    requester: requesterId,
  });

  const deliveryPayload = {
    request_id: request.request_id,
    taskId: task.id,
    task: { id: task.id, title: task.title, project: mapped, priority, acceptance_criteria: payload.acceptance_criteria },
    source,
    requester: requesterId,
  };

  let delivery = null;
  if (typeof opts.deliver === "function") {
    delivery = attemptDelivery(dir, bots, opts.deliver, deliveryPayload, { attempt: 1, nowMs });
    writeJson(deliveriesPath(dir, request.request_id), {
      request_id: request.request_id,
      taskId: task.id,
      payload: rt.redactSecrets(dir, deliveryPayload),
      attempts: delivery.attempts,
      lastError: delivery.lastError,
      nextRetryAt: delivery.nextRetryAt,
      status: delivery.ok ? "delivered" : "failed",
      at: new Date(nowMs).toISOString(),
    });
  }

  return {
    accepted: true,
    code: "ACCEPTED",
    taskId: task.id,
    duplicate: false,
    delivery,
    reason: `task ${task.id} created for project ${mapped} (origin bot:${provider})`,
  };
}

/** Idempotency records, newest first. */
export function inbox(dir) {
  return listJson(botsDir(dir, "inbox")).sort((a, b) => String(b.at ?? "").localeCompare(String(a.at ?? "")));
}

/** Delivery records, newest first. */
export function deliveries(dir) {
  return listJson(botsDir(dir, "deliveries")).sort((a, b) => String(b.at ?? "").localeCompare(String(a.at ?? "")));
}

/** Intake journal entries (from the shared action journal). */
export function intakeLog(dir, limit = 50) {
  return rt.readActions(dir, limit).filter((a) => a.type === "bot.intake");
}

/**
 * Retry deliveries that failed, without ever creating a second task:
 * the payload is read back from the delivery record.
 */
export function deliverPending(dir, config, deliverFn, opts = {}) {
  const bots = botsConfig(config) ?? {};
  const nowMs = opts.nowMs ?? Date.now();
  const max = bots?.delivery?.max_attempts ?? 3;
  const out = { attempted: 0, delivered: 0, failed: 0, gaveUp: 0 };

  for (const record of deliveries(dir)) {
    if (record.status === "delivered") continue;
    if ((record.attempts ?? 0) >= max) {
      out.gaveUp += 1;
      continue;
    }
    const due = record.nextRetryAt ? Date.parse(record.nextRetryAt) : null;
    if (due !== null && Number.isFinite(due) && due > nowMs) continue;

    out.attempted += 1;
    const result = attemptDelivery(dir, bots, deliverFn, record.payload ?? {}, {
      attempt: (record.attempts ?? 0) + 1,
      nowMs,
    });
    writeJson(deliveriesPath(dir, record.request_id), {
      ...record,
      attempts: result.attempts,
      lastError: result.lastError,
      nextRetryAt: result.nextRetryAt,
      status: result.ok ? "delivered" : "failed",
    });
    if (result.ok) out.delivered += 1;
    else out.failed += 1;
  }

  return out;
}
