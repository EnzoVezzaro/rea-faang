---
schema_version: "1.0"
id: "google-classroom"
company_id: "google"
name: "Google Classroom"
aliases: ["Classroom"]
product_type: "business_software"
categories: ["education", "learning-management", "assignments"]
lifecycle_status: "active"
official_url: "https://classroom.google.com/"
official_docs_url: "https://developers.google.com/workspace/classroom"
official_source_urls: ["https://support.google.com/edu/classroom/answer/6020279", "https://developers.google.com/workspace/classroom/guides/get-started", "https://developers.google.com/workspace/classroom/guides/key-concepts/api-structure", "https://developers.google.com/workspace/classroom/reference/rest"]
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
command_source: "https://developers.google.com/workspace/classroom/reference/rest"
---
# 1. Executive summary

Google Classroom is Google's education platform for managing classes, rosters, assignments, materials, announcements, submissions, grades and teacher-student communication. It is part of Google Workspace for Education and integrates with Drive, Docs, YouTube, Gmail and Calendar, but remains a distinct classroom workflow product.

# 2. Product identity and ownership

- **Official name:** Google Classroom
- **Company:** Google LLC, part of Alphabet Inc.
- **Lifecycle:** active
- **Canonical website:** https://classroom.google.com/
- **Identity evidence:** Google Classroom Help and the Classroom API documentation identify courses, coursework, student submissions, teachers and students as its core resources.

# 3. Product capabilities

- Create and manage classes, rosters, invitations and teacher/student roles.
- Publish announcements, materials, assignments and questions.
- Accept submissions, grade work, return feedback and track status.
- Attach Drive files, YouTube videos, links and add-on content.
- Integrate with Workspace for Education and support developer-created coursework.

# 4. Technical architecture

The public API model includes courses, aliases, invitations, user profiles, students, teachers, coursework, course materials, announcements, topics, submissions, add-on attachments and registrations. Google operates the hosted identity, storage, notification and education services; internal implementation and institution policy enforcement are proprietary.

# 5. User workflows

An administrator or teacher creates a class and roster. A teacher posts an announcement, material or assignment with optional attachments and due date. Students view and submit work; teachers review, comment, grade and return it. API integrations can create and manage coursework and read or update permitted submissions.

# 6. Pricing and access

Availability and feature eligibility depend on a Google Workspace for Education domain, institution settings, user role, license type and API scopes. Some features are restricted to particular Education editions. This pass does not assert current pricing or a specific institution's eligibility.

# 7. API and integration surface

The Classroom API is a REST API for courses, rosters, coursework, materials, announcements, topics and student submissions. OAuth scopes distinguish course, roster, coursework, materials, announcements and student-submission access. CourseWork integrations can create or grade assignments, but modification rights are constrained by the developer project and course permissions.

# 8. Existing open-source alternatives

- **Moodle (GPL-3.0):** mature self-hosted learning-management system.
- **Open edX (AGPL-3.0):** open-source course and learning platform.
- **Canvas LMS (AGPL-3.0):** open-source learning-management platform and course workflows.

# 9. Alternative comparison

These systems cover classes, assignments, grades and learning workflows, often with broader LMS capabilities. They do not reproduce Google's Workspace identity, Drive/Docs integration, Classroom API semantics or institution-specific Education administration. Coverage is partial.

# 10. Missing capabilities and opportunity analysis

A replacement would need course and roster management, assignment and submission semantics, grading, feedback, notifications, identity and guardian workflows, file permissions, integrations, audit, accessibility and education privacy controls.

# 11. REA implementation strategy

Choose a narrow class-and-assignment workflow and reuse a mature LMS. Define roster ownership, submission states, grading, attachments and privacy before adding integrations. Do not claim Classroom API compatibility without testing OAuth scopes, teacher/student permissions and developer-project ownership rules.

# 12. Security, privacy, and compliance

Classroom data includes student identity, coursework, grades, communications and potentially sensitive educational records. Verify institution ownership, role boundaries, guardian access, retention, audit, file sharing, regional requirements and least-privilege OAuth scopes before deployment.

# 13. Sources and evidence

- [About Classroom](https://support.google.com/edu/classroom/answer/6020279) — official roles, workflows and integrations.
- [Classroom API overview](https://developers.google.com/workspace/classroom/guides/get-started) — official API use cases.
- [API resources](https://developers.google.com/workspace/classroom/guides/key-concepts/api-structure) — official resource model and relationships.
- [Classroom API reference](https://developers.google.com/workspace/classroom/reference/rest) — official REST resources and methods.

# 14. Open questions

- Which Education edition, domain policies and roles should a comparison target?
- Is the target a classroom workflow, a full LMS or an integration with an existing LMS?
- What student-data, guardian, grading and retention requirements are mandatory?

# 15. Research history

Record updated 2026-11-03 from official Google Classroom Help and Google Developers sources. Status: `researched`; license-specific features, institutional policy and proprietary infrastructure remain outside this pass.
