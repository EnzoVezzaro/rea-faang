# REA web-surface report — Alexa (`amazon-alexa`)

REA capture of the public web surface of Alexa did not complete.

| | |
|---|---|
| Product | Alexa (`amazon-alexa`) |
| Company | Amazon |
| Target | https://developer.amazon.com/alexa |
| Captured | 2026-11-03T01:29:19.616Z |
| Status | failed |

## Method

REA's `capture-browser-scenario` provider launched a headless Chrome profile,
navigated to the product's public `official_url`, waited for the page to settle,
and captured the final URL and the accessibility outline. Analysis runs locally;
only publicly reachable pages are observed. No authentication is attempted and no
access control is bypassed.

```json
{
  "browser": {
    "mode": "launch",
    "executable_path": "<chrome>",
    "headless": true
  },
  "start_url": {
    "url": "https://developer.amazon.com/alexa"
  },
  "actions": [
    {
      "step_id": "settle",
      "action": "wait_for_timeout",
      "duration_ms": 2500
    }
  ],
  "capture": {
    "at_end": [
      "url",
      "accessibility"
    ]
  }
}
```

## Result

Capture failed: `{"error":"Browser scenario capture failed","code":"provider_timeout","category":"timeout","message":"Browser launch and persistent-context startup exceeded its 20000 ms command_timeout_ms deadline (deadlineExpired). This is not the caller observation window, the 10000 ms CDP discovery deadline, or the 5000 ms cleanup grace.","retryable":true,"remediation":{"action":"Set command_timeout_ms in the capture-browser-scenario JSON above 20000 (integer milliseconds from 1 to 2147483647; omitted means 20000). Applies on the next call. Allow execution, cleanup and delivery headroom in the outer MCP client deadline. Confirm outstanding work and cleanup before retrying. command_timeout_ms does not raise the fixed protocol, retained-event, or source byte budgets, the 10000 ms CDP discovery response deadline, or the 5000 ms cleanup grace. Those have no runtime override."},"details":{"operation":"capture_browser_scenario","reason":"timeout","diagnostics":{"phase":"launch","command_timeout_ms":20000},"cleanup_history":{"primary_error":{"code":"provider_timeout","category":"timeout","message":"Browser launch and persistent-context startup exceeded its 20000 ms command_timeout_ms deadline (deadlineExpired). This is not the caller observation window, the 10000 ms CDP discovery deadline, or the 5000 ms cleanup grace.","retryable":true,"remediation":{"action":"Set command_timeout_ms in the capture-browser-scenario JSON above 20000 (integer milliseconds from 1 to 2147483647; omitted means 20000). Applies on the next call. Allow execution, cleanup and delivery headroom in the outer MCP client deadline. Confirm outstanding work and cleanup before retrying. command_timeout_ms does not raise the fixed protocol, retained-event, or source byte budgets, the 10000 ms CDP discovery response deadline, or the 5000 ms cleanup grace. Those have no runtime override."},"details":{"operation":"capture_browser_scenario","reason":"timeout","diagnostics":{"phase":"launch","command_timeout_ms":20000}}},"cleanup_error":{"code":"cleanup_incomplete","category":"execution_failure","message":"Provider cleanup could not be fully confirmed. Review the reported local resources before opening another target.","retryable":false,"remediation":{"action":"Provider cleanup could not be fully confirmed. Review the reported local resources before opening another target."},"details":{"provider_id":"rea-playwright-browser-scenario","operation":"capture_browser_scenario","cleanup":"incomplete","resources":[],"diagnostics":{"reason":"Browser scenario cleanup capabilities remain retained."},"execution_failure":"execution_failure"}}}}}`

The page may be unavailable, geo-restricted, require authentication, or need a
longer settle window. Re-run with `--only amazon-alexa --wait 6000`.
