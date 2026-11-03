---
schema_version: "1.0"
id: "amazon-connect-talent"
company_id: "amazon_aws"
name: "Amazon Connect Talent"
aliases:
  - "Connect Talent"
product_type: "ai_agent_platform"
categories:
  - "recruiting"
  - "talent-acquisition"
  - "voice-interview"
  - "assessment"
  - "agentic-ai"
lifecycle_status: "active"
official_url: "https://aws.amazon.com/products/connect/talent/"
official_docs_url: "https://docs.aws.amazon.com/talent/"
official_source_urls:
  - "https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-connect-talent/"
  - "https://aws.amazon.com/products/connect/talent/"
  - "https://aws.amazon.com/products/connect/talent/faqs/"
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

Amazon Connect Talent is an AWS AI-powered hiring solution for scaled recruiting. AWS describes AI-led voice interviews, competency-based assessments, candidate scoring, a mobile-first candidate experience and recruiter workflows. AWS announced general availability in September 2026 after an earlier preview.

# 2. Product identity and ownership

- **Official name:** Amazon Connect Talent
- **Company:** Amazon Web Services
- **Lifecycle:** Active/general availability; official materials state initial availability in US East (N. Virginia) and US West (Oregon).
- **Product page:** https://aws.amazon.com/products/connect/talent/

# 3. Product capabilities

- AI-led voice interviews with adaptive questioning.
- Job-specific competency assessments and scoring.
- Candidate portal with mobile-first experience and brand customization.
- Recruiter dashboard, transcripts, scores and evaluation records.
- System administration and applicant-tracking integrations.

# 4. Technical architecture

Public materials expose candidate evaluation workflows, AI agents, interview transcripts, score/evaluation outputs, portal and ATS integration surfaces. Internal models, assessment science, bias controls, voice infrastructure, ranking and data-processing implementation remain unknown.

# 5. User workflows

Recruiters configure role criteria and assessments, candidates complete an assessment and AI-led interview, and recruiters review scores, transcripts and evaluations before making hiring decisions. Human oversight and job-related criteria remain necessary; autonomous hiring is not inferred.

# 6. Pricing and access

AWS documents consumption pricing per completed candidate evaluation and region-specific availability. Current price, free credits, language support and enterprise terms require verification from official pricing and account surfaces.

# 7. API and integration surface

- Product page: https://aws.amazon.com/products/connect/talent/
- FAQ: https://aws.amazon.com/products/connect/talent/faqs/
- Official materials mention ATS integration, candidate portal and recruiter workflows; the complete public API surface remains to be mapped.

# 8. Existing open-source alternatives

Potentially relevant projects include OpenCATS, ERP/ATS platforms, Rasa, open speech-to-text systems and structured assessment libraries. Their hiring workflow, voice interview, scoring, audit and compliance coverage must be verified before assigning alternatives.

# 9. Alternative comparison

Open-source ATS, conversational AI and assessment components may cover isolated functions, but no equivalence is claimed for Connect Talent's integrated AI interviews, assessment science, candidate portal, scoring, audit trail and AWS operations.

# 10. Missing capabilities and opportunity analysis

REA should separate job configuration, assessment generation, voice interviewing, adaptive questioning, scoring, transcript handling, recruiter review, candidate privacy, ATS integration and fairness/audit controls.

# 11. RAE implementation strategy

Use public AWS materials, public interoperability surfaces and synthetic or authorized test candidates only. A clean-room equivalent must preserve human decision authority, use independent models and avoid copying Amazon hiring science, prompts, datasets or proprietary assets.

# 12. Security, privacy, and compliance

Research must verify candidate consent, recording and transcript retention, biometric/voice data handling, fairness testing, explainability, access control, regional processing, deletion and employment-law constraints. No objectivity or compliance guarantee is inferred from AWS marketing claims.

# 13. Evidence register

- https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-connect-talent/ — official GA and availability context.
- https://aws.amazon.com/products/connect/talent/ — official product scope.
- https://aws.amazon.com/products/connect/talent/faqs/ — official capabilities and boundaries.

# 14. Unknowns

- Full API, ATS, language, region and quota matrix.
- Assessment model, fairness evaluation and explainability behavior.
- Voice recording, transcript and candidate-data retention details.
- Open-source coverage for the integrated recruiting experience.

# 15. Research status

`pending`: product identity and public scope are established; complete REA capture, alternative verification and acceptance review remain outstanding.
