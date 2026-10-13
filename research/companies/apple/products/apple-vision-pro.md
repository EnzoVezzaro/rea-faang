---
schema_version: "1.0"
id: "apple-vision-pro"
company_id: "apple"
name: "Vision Pro"
aliases: []
product_type: "hardware"
categories:
  - "hardware"
official_url: "https://www.apple.com/apple-vision-pro/"
official_docs_url: null
official_source_urls: []
lifecycle_status: "active"
research_status: "pending"
research_confidence: "unverified"
alternative_status: "none_verified"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: null
last_verified_at: null
next_review_at: null
research_version: 1
---

# 1. Executive summary

Apple Vision Pro is a spatial computing headset (mixed reality / augmented reality) running visionOS. It combines high-resolution micro-OLED displays, advanced eye/hand tracking, and a custom R1 chip for real-time sensor processing. It targets both consumer and professional use cases: spatial computing, immersive media, productivity, and development.

# 2. Product identity and ownership

- **Official name:** Apple Vision Pro
- **Company and business unit:** Apple Inc. (Technology Hardware, Reality Labs equivalent)
- **Parent organization:** Apple Inc.
- **Original launch date:** 2024 (announced 2023)
- **Current lifecycle status:** active
- **Previous names:** None (rumored as "Reality Pro", "xrOS" before launch)
- **Acquisitions or ownership changes:** Built on acquisitions: PrimeSense (2013), Metaio (2015), Flyby Media (2016), Akonia Holographics (2018), NextVR (2020), Spaces (2020)
- **Related products:** visionOS, Xcode (visionOS SDK), Reality Composer Pro, ARKit, Metal, Core ML
- **Official website:** https://www.apple.com/apple-vision-pro/
- **Official documentation:** https://developer.apple.com/visionos/

# 3. Product capabilities

- **Displays:** Dual micro-OLED, 23M pixels total (~3660x3200 per eye), 90/96/100Hz, HDR, wide color (P3)
- **Optics:** Three-element lens, ZEISS optical inserts (prescription), EyeSight (external display showing eyes)
- **Tracking:** Eye tracking (IR cameras), hand tracking (downward cameras), head tracking (IMU + cameras), no controllers
- **Input:** Eyes + hands (pinch, tap, grab), voice (Siri), Bluetooth keyboard/trackpad/game controller
- **Passthrough:** Stereo color passthrough cameras (6.5ms latency), LiDAR + TrueDepth for depth
- **Audio:** Spatial Audio with dynamic head tracking, audio ray tracing, dual-driver audio pods
- **Compute:** M2 chip (general compute) + R1 chip (real-time sensor processing)
- **Memory/Storage:** 16GB unified, 256GB/512GB/1TB storage
- **Battery:** External 2-hour battery pack, USB-C for all-day use
- **OS:** visionOS (iOS-based), spatial apps, windows, volumes, immersive spaces
- **Apps:** Native visionOS apps, compatible iOS/iPadOS apps, Mac Virtual Display
- **Personas:** Digital avatar for FaceTime (scanned via headset)
- **Environments:** Immersive backgrounds (Haleakalā, Yosemite, etc.)
- **Travel mode:** Optimized for airplane use
- **Guest mode:** Temporary access for others

# 4. Technical architecture

- **visionOS:** iOS-derived, new subsystem for spatial computing (RealityKit, ARKit, SwiftUI for visionOS)
- **Rendering:** Metal, foveated rendering (eye-tracked), variable rate shading
- **Frame compositing:** Real-time passthrough + virtual content at 90/96/100fps
- **Sensor fusion:** R1 processes 12 cameras, 5 sensors, 6 microphones at <12ms latency
- **App model:** SwiftUI + RealityKit, volumes (3D content), windows (2D), immersive spaces (full)
- **Distribution:** App Store (visionOS), TestFlight, enterprise
- **Development:** Xcode, Reality Composer Pro, visionOS Simulator
- **No public hardware specs for third-party headsets**

# 5. User workflows

Setup: eye/hand calibration, Persona scan, ZEISS inserts (if needed). Daily use: app launching via gaze+pinch, window management in 3D space, Mac Virtual Display, immersive media (Apple TV+, Disney+), FaceTime with Personas, productivity (Safari, Notes, Freeform, Microsoft 365), development (Xcode, terminal). Professional: 3D design (Spline, JigSpace), medical (Complete HeartX), training.

# 6. Pricing and access

$3,499 (256GB), $3,699 (512GB), $3,899 (1TB). ZEISS inserts: $99 (readers), $149 (prescription). Requires iPhone/iPad for setup. Available in US first, expanding globally.

# 7. API and integration surface

- **visionOS SDK:** SwiftUI, RealityKit, ARKit, Reality Composer Pro
- **RealityKit:** ECS-based 3D engine, physics, animation, spatial audio
- **ARKit:** Plane detection, image tracking, object detection, body tracking, scene reconstruction
- **SwiftUI for visionOS:** Windows, volumes, immersive spaces, ornaments, gestures
- **Enterprise:** MDM, App Store for Business, custom apps
- **Web:** WebXR not supported; WebKit for 2D web content in windows

# 8. Existing open-source alternatives

- **Meta Quest (2/3/Pro):** Android-based, controller + hand tracking, large app library, lower cost
- **Valve Index:** PC-tethered, base stations, controllers, SteamVR, high fidelity
- **HTC Vive XR Elite:** Standalone + PC, mixed reality, eye tracking (Pro)
- **Magic Leap 2:** Enterprise AR, optical see-through, high cost
- **XREAL Air / Viture:** Tethered AR glasses, no compute, phone/PC required
- **OpenXR / Monado:** OpenXR runtime for Linux, supports various headsets
- **Godot / Unity / Unreal:** Engines with XR support
- **No open-source hardware matches Vision Pro's display density, eye/hand tracking integration, or visionOS**

# 9. Alternative comparison

Meta Quest 3 is the closest consumer alternative ($499 vs $3499) with hand tracking and mixed reality, but lower resolution, no eye tracking, Android-based. Valve Index offers higher fidelity but requires PC and base stations. OpenXR/Monado provides a software stack but no integrated hardware. Vision Pro's unique combination: micro-OLED density, eye+hand input (no controllers), R1 real-time processing, visionOS spatial app model.

# 10. Missing capabilities and opportunity analysis

Custom silicon (R1), micro-OLED supply chain, eye/hand tracking at <12ms latency, visionOS spatial app model, Persona generation, and Apple ecosystem integration are the main gaps. An open alternative could focus on OpenXR-based software stack on existing hardware (Quest, PCVR) or contribute to Monado.

# 11. RAE implementation strategy

Not feasible to replicate hardware. Strategy: Develop visionOS-compatible apps using OpenXR/WebXR for cross-platform spatial apps. Contribute to Monado (OpenXR runtime) for Linux spatial computing. Build open spatial app frameworks (Godot XR, three.js WebXR). Focus on software, not hardware.

# 12. Security, privacy, and compliance

Eye/hand tracking data, environment mapping (LiDAR), Persona biometric data, passthrough camera feed are highly sensitive. visionOS processes most on-device. Open alternative must implement strict local-only processing, no telemetry, user consent for sensor data, and transparent data policies. HIPAA/GDPR considerations for enterprise/medical use.

# 13. Sources and evidence

- https://www.apple.com/apple-vision-pro/ (product page)
- https://developer.apple.com/visionos/ (documentation)
- https://www.meta.com/quest/ (alternative)
- https://monado.dev/ (OpenXR runtime)

# 14. Open questions

- Can OpenXR on Quest 3 achieve Vision Pro-like hand/eye interaction quality?
- What is the minimum hardware spec for viable foveated rendering?
- How to replicate Persona generation without Apple's scanning pipeline?

# 15. Research history

Initial research record created 2026-01-13. No prior research events.

---

# 16. Alternative comparison (continued)

Quest 3 + OpenXR is the most practical open development target. Vision Pro hardware is not replicable by open source. Focus on cross-platform spatial app development.

---

# 17. RAE implementation strategy (continued)

Phase 1: OpenXR app templates (Godot, three.js, React Three Fiber). Phase 2: Monado improvements for Linux desktop XR. Phase 3: Cross-platform spatial UI components. Phase 4: Open persona/avatar system (Ready Player Me, VRM). Accept hardware gap.