// Minimal, deterministic Markdown → HTML renderer for `docs/*.md`.
//
// Supports exactly what the documentation set uses: ATX headings, fenced code
// blocks (including indented fences inside list items), unordered and ordered
// lists with one nesting level, tables, blockquotes, horizontal rules,
// paragraphs, and inline code / bold / italic / links. No dependencies, no
// timestamps — identical input produces identical output.

const FENCE = /^(\s*)(```+|~~~+)/;

/** Escape HTML special characters in text content and attribute values. */
export function escapeHtml(s) {
  return s
    .replace(/&/g, '&' + 'amp;')
    .replace(/</g, '&' + 'lt;')
    .replace(/>/g, '&' + 'gt;')
    .replace(/"/g, '&' + 'quot;');
}

/**
 * Render inline markdown. `resolveLink(href)` rewrites link targets; return
 * the href to use (already escaped or not — it is escaped here).
 */
export function renderInline(text, resolveLink = (h) => h) {
  // Protect code spans first so their content is not further processed.
  const codeSpans = [];
  let out = text.replace(/(`+)([\s\S]*?)\1/g, (_, ticks, body) => {
    codeSpans.push(`<code>${escapeHtml(body)}</code>`);
    return `\u0000${codeSpans.length - 1}\u0000`;
  });

  out = escapeHtml(out);

  // Images: ![alt](src "title"). Handled before links so the link pattern
  // cannot consume the inner [alt](src) pair. Raw HTML is escaped, so images
  // in docs body markdown must use this syntax.
  out = out.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+["&]quot;([^"&]*)["&]quot;)?\)/g, (m, alt, src, title) => {
    const resolved = resolveLink(src);
    const w = title && /^\d+%?$/.test(title) ? ` width="${escapeHtml(title)}"` : '';
    return `<img src="${escapeHtml(resolved)}" alt="${escapeHtml(alt)}"${w} />`;
  });

  // Links: [text](href "title"). The label keeps its code-span placeholders
  // (restored at the end); bold/italic inside the label are applied here so
  // the outer pass does not need to recurse.
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (m, label, href) => {
    const resolved = resolveLink(href);
    label = label
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[\s(])\*([^*\s][^*]*?)\*/g, '$1<em>$2</em>');
    return `<a href="${escapeHtml(resolved)}">${label}</a>`;
  });

  // Bold then italic.
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/(^|[\s(])\*([^*\s][^*]*?)\*/g, '$1<em>$2</em>');

  // Restore code spans.
  out = out.replace(/\u0000(\d+)\u0000/g, (_, i) => codeSpans[Number(i)]);
  return out;
}

/** Parse a table body from its markdown lines into an HTML <table>. */
function renderTable(headerLine, rows, resolveLink) {
  const cells = (line) =>
    line
      .replace(/^\s*\|/, '')
      .replace(/\|\s*$/, '')
      .split(/(?<!\\)\|/)
      .map((c) => c.trim().replace(/\\\|/g, '|'));

  const head = cells(headerLine)
    .map((c) => `<th scope="col">${renderInline(c, resolveLink)}</th>`)
    .join('');
  const body = rows
    .map((line) => `<tr>${cells(line).map((c) => `<td>${renderInline(c, resolveLink)}</td>`).join('')}</tr>`)
    .join('\n');
  return `<table>\n<thead>\n<tr>${head}</tr>\n</thead>\n<tbody>\n${body}\n</tbody>\n</table>\n`;
}

/**
 * Split list items from `lines` starting at `i`. Each item is its first line
 * plus every indented continuation line (text, nested lists, fences) until the
 * next item at the same indent or a non-indented block.
 */
function parseList(lines, i, indentRe) {
  const items = [];
  while (i < lines.length) {
    const m = lines[i].match(indentRe);
    if (!m) break;
    const itemIndent = m[1].length;
    const first = lines[i].slice(m[0].length);
    i++;
    const rest = [];
    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) {
        // A blank line belongs to the item only when deeper-indented content follows.
        let j = i + 1;
        while (j < lines.length && !lines[j].trim()) j++;
        if (j < lines.length && /^ {1,}/.test(lines[j]) && !indentRe.test(lines[j])) {
          rest.push('');
          i = j;
          continue;
        }
        break;
      }
      const lm = line.match(/^(\s*)([-*+]|\d+[.)])\s+/);
      if (lm && lm[1].length <= itemIndent) break;
      if (!lm && !/^\s/.test(line)) break;
      rest.push(line);
      i++;
    }
    items.push({ first, rest });
  }
  return { items, next: i };
}

function isBlockStart(line) {
  return (
    FENCE.test(line) ||
    /^(#{1,6})\s/.test(line) ||
    /^\s*>/.test(line) ||
    UL_RE.test(line) ||
    OL_RE.test(line)
  );
}

function renderList(items, ordered, resolveLink) {
  const tag = ordered ? 'ol' : 'ul';
  const lis = items
    .map(({ first, rest }) => {
      // Soft-wrapped text lines continue the item's first line as one paragraph.
      const para = [first];
      let k = 0;
      while (k < rest.length && rest[k].trim() && !isBlockStart(rest[k])) {
        para.push(rest[k].trim());
        k++;
      }
      const blocks = rest.slice(k);
      const hasBlocks = blocks.some((l) => l.trim());
      const text = renderInline(para.join(' '), resolveLink);
      const inner = hasBlocks ? `<p>${text}</p>\n${renderBlocks(blocks, resolveLink)}` : text;
      return `<li>${inner}</li>`;
    })
    .join('\n');
  return `<${tag}>\n${lis}\n</${tag}>\n`;
}

const UL_RE = /^(\s*)[-*+]\s+/;
const OL_RE = /^(\s*)\d+[.)]\s+/;

/** Render an array of markdown lines into block-level HTML. */
export function renderBlocks(lines, resolveLink) {
  let out = '';
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    // Fenced code (``` or ~~~), at any indent; the indent is stripped.
    const fence = line.match(FENCE);
    if (fence) {
      const indent = fence[1].length;
      const marker = fence[2][0].repeat(3);
      const info = line.slice(fence[0].length).trim();
      const buf = [];
      i++;
      while (i < lines.length && !lines[i].match(new RegExp(`^\\s{0,${indent}}${marker}`))) {
        buf.push(lines[i].slice(indent));
        i++;
      }
      i++; // closing fence
      const lang = info ? ` class="language-${escapeHtml(info.split(/\s/)[0])}"` : '';
      out += `<pre><code${lang}>${escapeHtml(buf.join('\n'))}</code></pre>\n`;
      continue;
    }

    // Heading
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      out += `<h${level}>${renderInline(h[2].trim(), resolveLink)}</h${level}>\n`;
      i++;
      continue;
    }

    // Horizontal rule
    if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      out += '<hr>\n';
      i++;
      continue;
    }

    // Table: current line starts with | and the next is a separator row.
    if (/^\s*\|/.test(line) && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(lines[i + 1]) && /-/.test(lines[i + 1])) {
      const header = line;
      i += 2;
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) {
        rows.push(lines[i]);
        i++;
      }
      out += renderTable(header, rows, resolveLink);
      continue;
    }

    // Blockquote
    if (/^\s*>/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) {
        buf.push(lines[i].replace(/^\s*>\s?/, ''));
        i++;
      }
      out += `<blockquote>\n${renderBlocks(buf, resolveLink)}</blockquote>\n`;
      continue;
    }

    // Lists (unordered / ordered, one nesting level).
    if (UL_RE.test(line) || OL_RE.test(line)) {
      const ordered = OL_RE.test(line);
      const { items, next } = parseList(lines, i, ordered ? OL_RE : UL_RE);
      i = next;
      out += renderList(items, ordered, resolveLink);
      continue;
    }

    // Paragraph: until a blank line or the start of another block. Soft-wrapped
    // source lines join into one flowing paragraph.
    const buf = [line.trim()];
    i++;
    while (i < lines.length && lines[i].trim()) {
      const l = lines[i];
      if (isBlockStart(l) || /^\s*\|/.test(l)) break;
      buf.push(l.trim());
      i++;
    }
    out += `<p>${renderInline(buf.join(' '), resolveLink)}</p>\n`;
  }
  return out;
}

/** Render a full markdown document to an HTML fragment. */
export function renderMarkdown(md, resolveLink) {
  return renderBlocks(md.replace(/\r\n?/g, '\n').split('\n'), resolveLink);
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[`*_]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
