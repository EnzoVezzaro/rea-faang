---
name: apple-vision-pro
description: Use when researching, comparing, or building a free and open-source replacement for Vision Pro (Apple). Open-source status is partial — see Monado, OpenXR.
---

# Vision Pro (`apple-vision-pro`)

| | |
|---|---|
| **Company** | Apple (`apple`) |
| **Product type** | `hardware` |
| **Categories** | `hardware` |
| **Official URL** | https://www.apple.com/apple-vision-pro/ |
| **Open-source status** | **partial** |

## What it is

Apple Vision Pro is a mixed-reality headset running visionOS, with eye/hand input and a spatial app platform.

## Core capabilities

- Spatial computing hardware (displays, sensors, tracking)
- visionOS app platform and hand/eye input
- Spatial audio and passthrough

## Existing open source

| Project | License | What it covers | Notes |
|---|---|---|---|
| [Monado](https://monado.dev/) | BSL-1.0 | Cross-platform open-source OpenXR runtime. | Software runtime; not a headset. |
| [OpenXR](https://www.khronos.org/openxr/) | Apache-2.0 | Open standard for AR/VR runtimes and apps. | Standard, and visionOS does not natively support it. |

## Gap

The hardware has no open equivalent, and the visionOS platform is closed; open stacks sit at the runtime/standard layer.

## Verdict

Partial. The software stack has open components (Monado, OpenXR); the hardware and visionOS are pending to open-source.

## Sources

- https://monado.dev/
- https://news.ycombinator.com/item?id=43768421
- https://www.reddit.com/r/linux/comments/1at4xbo/when_if_ever_do_you_expect_well_get_a_spatialar/

## Provenance

- Catalog record: [`catalog/products.jsonl`](../../products.jsonl) (`apple-vision-pro`)
- Research dossier: [`research/companies/apple/products/apple-vision-pro.md`](../../../research/companies/apple/products/apple-vision-pro.md)
- REA web-surface report: [`catalog/rea/apple/apple-vision-pro.md`](../../rea/apple/apple-vision-pro.md)
