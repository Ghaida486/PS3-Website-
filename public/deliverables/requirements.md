# Requirements and traceability
| Requirement | Implementation | Verification |
|---|---|---|
| FR1 UK location and initial design | Overview and System design; Midlands is a search region only | Content review |
| FR2 Compare three countries | UK, US, Saudi Arabia with vintage, sources and gaps | Content review; no unsupported zeros |
| FR3 Persistent evidence and assumptions | D1 users/countries/sources/designs/design_claims/metrics | Migration and read/write tests |
| FR4 Genuine external API | Approved NESO GB carbon intensity endpoint | Protected refresh and validation |
| FR5 Registered-user adviser | Sign-in, registration and question endpoint | Access tests; AI requires hosted credential |
| FR6 Reject unauthenticated AI | Server identity/registration checks | 401/403 tests |
| FR7 Cite substantive answers | Structured response and source-ID validation | Live inference pending activation |
| FR8 Epistemic labels | Fact, assumption, calculation, decision, unknown | UI and response schema |
| FR9 Keep last valid source data | Append only after complete API validation | Simulated failure test |
| FR10 Show timestamps | Claim update, source access, metric period/retrieval | Evidence section |

Core submission: interactive website, one-page system diagram PDF, five-minute on-screen presentation and PDF, two-page memo PDF. Engineering evidence: schema, source register, this traceability table, verification report and request walkthrough. The two-minute guided walkthrough demonstrates the product's sections; it is not proof of live AI operation.

Axiomatic design trace: customer need (fair useful compute) → FR (measurable access/output) → physical parameters (workload-sized capacity, scheduler quotas, power/cooling paths) → verification (benchmarks, failover, costs, access tests) → monitoring (productive hours, waits, failure rates, cost recovery). Independence is a design objective; cooling/power and scheduling/capacity remain coupled and require joint testing.

Non-goals: construction-ready design; engineering certification; real-time grid control; guaranteed investment returns; external submission to the course spreadsheet; unapproved public sharing.
