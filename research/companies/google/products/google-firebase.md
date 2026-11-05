---
schema_version: "1.0"
id: "google-firebase"
company_id: "google"
name: "Firebase"
aliases: ["Google Firebase"]
product_type: "developer_tool"
categories:
  - "developer_tool"
  - "backend-as-a-service"
  - "mobile-development"
  - "web-development"
official_url: "https://firebase.google.com/"
official_docs_url: "https://firebase.google.com/docs"
official_source_urls: ["https://firebase.google.com/", "https://firebase.google.com/docs/guides", "https://firebase.google.com/docs/projects/learn-more", "https://firebase.google.com/docs/auth", "https://firebase.google.com/docs/functions", "https://firebase.google.com/pricing"]
lifecycle_status: "active"
research_status: "researched"
research_confidence: "verified"
alternative_status: "partial"
alternative_coverage: "unknown"
opportunity_status: "research_further"
last_researched_at: 2026-11-03T00:00:00Z
last_verified_at: 2026-11-03T00:00:00Z
next_review_at: 2027-02-03T00:00:00Z
research_version: 2
inventory_status: "verified"
command_status: "documented"
command_source: "https://firebase.google.com/docs/cli"
---

# 1. Executive summary

Firebase is Google's application-development platform for mobile and web apps. It combines client SDKs, app-facing services, backend infrastructure, deployment tools and operational features behind a Firebase project. Firebase projects are also Google Cloud projects with Firebase-specific configuration; this makes Firebase a distinct developer platform, not a duplicate catalog row for Google Cloud.

# 2. Product identity and ownership

- **Official name:** Firebase
- **Company:** Google LLC, part of Alphabet Inc.
- **Lifecycle:** active
- **Canonical website:** https://firebase.google.com/
- **Official documentation:** https://firebase.google.com/docs
- **Identity evidence:** Google's product page and documentation identify Firebase as a mobile and web app development platform and describe its Build, Run, Learn and Reference surfaces.
- **Project model:** a Firebase project is a Google Cloud project with Firebase-specific configuration and services enabled.
- **Scope boundary:** Firebase is cataloged as the integrated developer platform; Firestore, Cloud Storage, Cloud Functions and other underlying services remain separately catalogable when they have their own canonical identity and contract.

# 3. Product capabilities

- Authentication and identity-provider integrations through Firebase Authentication.
- Cloud Firestore and Realtime Database for application data and synchronization.
- Cloud Storage for Firebase for user-generated files.
- Hosting and App Hosting for web applications, with serverless integrations.
- Cloud Functions for Firebase for event-driven and HTTP backend code.
- Cloud Messaging, App Check, Remote Config, Analytics, Crashlytics, Performance Monitoring, Test Lab and other Run features.
- SDKs, Admin SDKs, API references, Emulator Suite and Firebase CLI workflows.
- Additional platform surfaces including Data Connect, Extensions and Firebase AI Logic where the project and service prerequisites support them.

# 4. Technical architecture

The top-level unit is a Firebase project. Apps are registered inside that project for supported platforms, and Firebase products are enabled and configured against the project. Client SDKs call Firebase services; server-side code can use the Admin SDK and Cloud Functions. Firebase Hosting can route requests to serverless backends, while the Emulator Suite supports local development and testing. Billing and quotas are shared with the corresponding Google Cloud project where the service requires it.

# 5. User and developer workflows

1. Create or select a Firebase project and register the iOS, Android, web or other supported app variant.
2. Add the required Firebase SDKs and configure Authentication, data, storage, hosting or messaging services.
3. Define security rules, IAM and environment boundaries before handling real user data.
4. Use the Emulator Suite and tests for local verification, then deploy through the Firebase CLI or documented console workflows.
5. Monitor quality, usage, crashes, performance and billing; configure budget alerts before enabling paid services.

# 6. Pricing and access

Firebase documents a no-cost Spark plan and a pay-as-you-go Blaze plan. The Spark plan has no payment method requirement and service-specific quotas. Blaze enables additional services and usage levels, with usage billed according to the applicable Firebase or Google Cloud pricing. This dossier does not assert a project's current quota or billing state.

# 7. API and integration surface

- Client SDK references for Apple platforms, Android, web, Flutter, Unity and C++.
- Admin SDK references and REST/API surfaces for server-side administration.
- Firebase CLI (`firebase`) for project initialization, local emulation and deployment workflows.
- Cloud Functions, Hosting, Cloud Storage, Cloud Firestore, Google Cloud and third-party webhook integrations.
- Extensions and documented integrations for adding packaged capabilities.

# 8. Existing open-source alternatives

- **Supabase:** Apache-2.0 platform combining PostgreSQL, authentication, storage, realtime and edge functions.
- **Appwrite:** BSD-3-Clause self-hostable backend with authentication, databases, storage, functions and related services.
- **Parse Platform:** BSD-3-Clause open-source application backend with Parse Server and SDKs.
- **PocketBase:** MIT-licensed, compact backend distributed as a single Go binary with authentication, data and realtime features.

# 9. Alternative comparison

Supabase and Appwrite are the closest broad alternatives for a self-hosted or independently operated application backend. Parse Platform and PocketBase cover narrower or different operational profiles. None provides a full equivalent of Firebase's Google Cloud project integration, managed service plane, device Test Lab, Crashlytics, ML/AI integrations, service-specific SDKs and operational tooling. Alternative coverage is therefore **partial** for the complete Firebase platform, even though the core BaaS category has mature open-source building blocks.

# 10. Missing capabilities and opportunity analysis

A replacement still needs secure identity, data and storage services, realtime delivery, serverless execution, deployment, observability, testing, quotas, tenancy, migrations and operational ownership. The largest gaps are the integrated Google Cloud control plane, managed device testing, crash and performance products, proprietary SDK behavior and provider-specific service integrations.

# 11. REA implementation strategy

For a self-hosted build, start with Supabase or Appwrite and define the required subset explicitly: authentication, database, storage, realtime, functions and deployment. Use an emulator-first workflow, write migration and security-rule tests, and keep provider-specific Firebase compatibility out of scope unless a product contract requires it. Do not claim Firebase API parity without testing each selected SDK and service behavior.

# 12. Security, privacy, and compliance

Firebase projects can process identity, application data, files, telemetry and crash data. Verify authentication providers, security rules, IAM, service accounts, encryption, retention, region, analytics consent and billing controls before production use. Keep credentials, user data and payload samples out of this catalog.

# 13. Sources and evidence

- [Firebase product page](https://firebase.google.com/) — official product identity and Build/Run capability families.
- [Firebase fundamentals](https://firebase.google.com/docs/guides) — official project setup, supported platforms and development workflow.
- [Understand Firebase projects](https://firebase.google.com/docs/projects/learn-more) — official Firebase/Google Cloud project relationship and hierarchy.
- [Firebase Authentication](https://firebase.google.com/docs/auth) — official identity and SDK capabilities.
- [Cloud Functions for Firebase](https://firebase.google.com/docs/functions) — official serverless and Google Cloud integration workflow.
- [Firebase pricing](https://firebase.google.com/pricing) — official Spark and Blaze plan information.

# 14. Open questions

- Which Firebase services are actually required by the target product, rather than the full platform?
- Is self-hosting, data residency or Firebase SDK compatibility the primary migration constraint?
- Which quotas, regions, compliance controls and Google Cloud integrations are mandatory?

# 15. Research history

- v1: catalog candidate with preliminary BaaS alternatives, research pending.
- v2: updated 2026-11-03 from official Firebase product, fundamentals, project, Authentication, Cloud Functions and pricing documentation. Status: `researched`; complete equivalence to Firebase's managed Google Cloud platform remains unverified.
