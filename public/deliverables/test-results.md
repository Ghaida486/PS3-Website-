# Verification report
5 October 2026. Results refer to the local preview unless stated otherwise. This report distinguishes implemented controls from tests actually executed.

## Passed
- Production Worker build succeeds. TypeScript no-emit check succeeds.
- D1 schema migration executes locally. Initial source/evidence read returns 7 sources and 12 claims.
- Anonymous adviser call returns 401.
- Anonymous design-write call returns 401.
- Authenticated but unregistered adviser call returns 403.
- Local test registration persists with default viewer role.
- Registered viewer cannot refresh evidence (403).
- An absent OpenAI credential returns a clear 503 response; no fabricated or canned AI answer.
- Numerical invariants: 91.104m annual useful GPU-hours at baseline; GPU purchases immediately before opening in year 2 and after four operating years in year 7; half-use increases full-build unit cost; options serve equal productive hours; debt draws and repayments reconcile across the horizon.
- Browser checks: primary navigation, stress-case selection and updated cash-flow heading, outage diagram state, evidence and source display.
- Genuine NESO API retrieval: initial 100 gCO2/kWh actual value for 2026-10-05T00:00Z / 00:30Z; stored as an explicitly dated initial snapshot, not a live annual figure.
- PDF rendering: memo has two pages, architecture one page, presentation five timed slides plus Q&A. Updated financial values visually checked.

## Pending / not claimed as passed
- Hosted sign-in and registration end-to-end: hosting platform owns sign-in; only local simulated sign-in tested.
- Hosted OpenAI credential and live inference are not configured. Source-grounded live answers, changed-PUE answers, model refusals and source prompt-injection resistance require activation and live tests.
- Editor email has not been provided. Privileged write/refresh and simulated-failure execution are awaiting authorised editor setup. Source code preserves existing metrics by validating before inserts, but this is not an executed end-to-end retention test.
- Automatic approval review rejected elevating the local test account without explicit permission. No such elevation was performed.
- Optional browser WebMCP calculation tool is feature-detected; no supported invocation context was available for execution testing.
- Supplier prices, workload demand, grid offer, site permits, annual site carbon and comparable national datacentre counts remain evidence gaps, not implementation test results.

## Submission notes
The two-minute MP4 is a captioned product overview, not a recording of successful live AI use. The accompanying guided walkthrough opens the live website and moves through its sections with pause/resume controls. Production deployment status is confirmed separately by the hosting service.
