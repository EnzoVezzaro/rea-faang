---
schema_version: "1.0"
id: "android"
company_id: "google"
name: "Android"
aliases: []
product_type: "operating_system"
categories:
  - "operating_system"
official_url: "https://www.android.com/"
official_docs_url: null
official_source_urls: []
lifecycle_status: "active"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "integrate_existing"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

Android is a Linux-based mobile operating system developed by Google. It is the world's most widely deployed mobile OS, powering billions of devices globally. It includes the Android Open Source Project (AOSP) as the core component.

# 2. Product identity and ownership

- **Official name:** Android
- **Company and business unit:** Google
- **Parent organization:** Alphabet Inc.
- **Original launch date:** 2007
- **Current lifecycle status:** active
- **Previous names:** None
- **Acquisitions or ownership changes:** None; acquired by Google in 2005 (originally by Android Inc.)
- **Related products:** ChromeOS, Wear OS, Android Auto, Google Play
- **Official website:** https://www.android.com/
- **Official documentation:** https://developer.android.com/

# 3. Product capabilities

- Linux kernel base
- Application framework with Java/Kotlin/Android APIs
- Dalvik/ART runtime
- Application sandboxing
- Notifications framework
- Connectivity ( cellular, Wi-Fi, Bluetooth, NFC)
- Hardware abstraction layer (HAL)
- File system with ext4/F2FS
- Security model with Verified Boot and SELinux

# 4. Technical architecture

Android's architecture has multiple layers:

- Linux kernel (core OS abstractions)
- Hardware abstraction layer (HAL) for device components
- Android runtime (ART) with Dalvik bytecode execution
- Application framework (APIs for activities, services, content providers, broadcast receivers)
- System apps and libraries
- AOSP source code releases

AOSP provides the source code under the Apache 2.0 license. Device manufacturers implement AOSP with proprietary extensions (gapps, drivers).

# 5. User workflows

Primary workflows: app installation, configuration, notification handling, multimedia consumption, telephony. Essential: app management, notifications, camera access. Advanced: background services, custom ROM installation, system-level debugging.

# 6. Pricing and access

AOSP is free and open source under Apache 2.0. Google Mobile Services (GMS) and Play Store are proprietary and require licensing. Device manufacturers pay for GMS certification.

# 7. API and integration surface

- Android SDK / NDK APIs
- Java/Kotlin/Multiplatform programming interfaces
- Permission system (runtime permissions)
- Content provider interface
- Intent system for inter-app communication

# 8. Existing open-source alternatives

- AOSP itself is the primary open-source Android source
- LineageOS as a aftermarket firmware
- /e/OS, /e.foundation de-Googled distributions
- Replicant (de-Googled Android focus)

# 9. Alternative comparison

AOSP provides the full open-source operating system. LineageOS and /e/OS are derivative distributions that remove proprietary Google components. Full GMS replacement requires effort.

# 10. Missing capabilities and opportunity analysis

De-Googled Android distributions exist but require device-specific maintenance. Building a fully independent mobile OS from scratch is extremely demanding. Focus on AOSP customization or distribution is more feasible.

# 11. REA implementation strategy

Contribute to AOSP, build a de-Googled distribution, or extend LineageOS. Full OS development is out of scope.

# 12. Security, privacy, and compliance

Verified Boot, SELinux, permission model, privacy controls. de-Googled distributions address data privacy concerns. Compliance depends on distribution and device.

# 13. Sources and evidence

- https://developer.android.com/ (documentation)
- https://source.android.com/ (AOSP)
- https://lineageos.org/ (aftermarket distribution)

# 14. Open questions

- What is the feasibility of a completely proprietary-free Android distribution?
- How do GMS-dependent apps function without Google Services?
- What is the maintenance burden of keeping AOSP customizations current?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

AOSP, LineageOS, /e/OS, and Replicant are the primary open-source Android options. Varying degrees of GMS compatibility.

---

# 17. REA implementation strategy (continued)

Contribute to AOSP de-Googling efforts or build on LineageOS. Full OS development not recommended for initial REA projects.