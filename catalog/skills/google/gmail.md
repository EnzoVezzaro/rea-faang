---
name: gmail
description: Use when researching, comparing, or building a free and open-source replacement for Gmail (Google). Open-source status is available — see Mailcow, Mail-in-a-Box, Mox / Stalwart, and more.
---

# Gmail (`gmail`)

| | |
|---|---|
| **Company** | Google (`google`) |
| **Product type** | `consumer_application` |
| **Categories** | `productivity` |
| **Official URL** | https://mail.google.com/ |
| **Open-source status** | **available** |

## What it is

Gmail is Google’s hosted email service: IMAP/POP/SMTP mail with a web client, search, spam filtering and tight Workspace integration.

## Core capabilities

- IMAP/POP/SMTP mail delivery and storage
- Webmail client, search, labelling
- Spam and phishing filtering, filtering rules

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [Mailcow](https://mailcow.email/) | GPL-3.0 | Dockerised full mail server (Postfix, Dovecot, Rspamd, SOGo). | Self-hosted; you own deliverability and DNS. |
| [Mail-in-a-Box](https://mailinabox.email/) | CC0-1.0 | One-command personal mail server bundle. | Opinionated, single-box. |
| [Mox / Stalwart](https://github.com/Mindbaz/awesome-opensource-email) | MIT | Modern all-in-one mail servers. | Newer entrants in the same space. |
| [Roundcube](https://roundcube.net/) | GPL-3.0 | Mature webmail client. | Client only; pair with a server. |

## Gap

Deliverability and anti-abuse at Gmail’s scale are operational, not software, gaps.

## Verdict

Available. The full mail stack is open source and widely self-hosted.

## Sources

- https://mailinabox.email/
- https://opensource.com/alternatives/gmail
- https://github.com/Mindbaz/awesome-opensource-email

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`gmail`)
- Research dossier: [`research/companies/google/products/gmail.md`](../../../research/companies/google/products/gmail.md)
- REA web-surface report: [`catalog/rea/google/gmail.md`](../../rea/google/gmail.md)
