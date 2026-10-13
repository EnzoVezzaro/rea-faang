---
name: android
description: Use when researching, comparing, or building a free and open-source replacement for Android (Google). Open-source status is available — see AOSP, LineageOS, GrapheneOS, and more.
---

# Android (`android`)

| | |
|---|---|
| **Company** | Google (`google`) |
| **Product type** | `operating_system` |
| **Categories** | `operating_system` |
| **Official URL** | https://www.android.com/ |
| **Open-source status** | **available** |

## What it is

Android is Google’s mobile operating system. The Android Open Source Project (AOSP) is the open core; Google Mobile Services, Play and most device builds are proprietary additions.

## Core capabilities

- Mobile OS runtime, app framework, system UI
- App sandbox and permission model
- App distribution via Play (proprietary layer)

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [AOSP](https://source.android.com/) | Apache-2.0 | The open-source core of Android itself. | The upstream project — no Play services. |
| [LineageOS](https://lineageos.org/) | Apache-2.0 | Community Android distribution for many devices. | Widest device support. |
| [GrapheneOS](https://grapheneos.org/) | MIT | Security-hardened Android, no Google services. | Pixel-focused. |
| [/e/OS](https://e.foundation/e-os/) | GPL-3.0 (varies) | De-Googled Android with a privacy app suite. | Consumer-oriented fork. |

## Gap

Google Mobile Services, Play and the certified hardware ecosystem are proprietary.

## Verdict

Available. Android’s core is open source and several independent distributions replace the proprietary layer.

## Sources

- https://grapheneos.org/
- https://lineageos.org/
- https://kevinboone.me/lineage-eos-graphene.html

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`android`)
- Research dossier: [`research/companies/google/products/android.md`](../../../research/companies/google/products/android.md)
- REA web-surface report: [`catalog/rea/google/android.md`](../../rea/google/android.md)
