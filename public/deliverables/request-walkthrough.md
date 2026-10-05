# One question from browser to D1 to OpenAI
1. A visitor signs in through the Sites-owned Sign in with ChatGPT flow. The server receives a stable authenticated identity, never a password.
2. Registration stores the identity, team and role in D1. Browser controls do not determine permissions.
3. The browser posts a question to /api/adviser. The backend checks identity, registration, input length and request rate. Missing identity receives 401; missing registration receives 403.
4. The server retrieves the current design, claims, source records and latest API metrics from D1 using prepared queries. Numerical scenario results are computed in TypeScript.
5. A bounded evidence snapshot, the question and deterministic numbers go to the OpenAI Responses API. The key stays in the hosted secret. Retrieved source text is treated as untrusted evidence, never instructions.
6. The response must label statements and cite real D1 source IDs or designated calculation/design identifiers. The server rejects unknown citation IDs and uncited facts, then returns the answer and token count.
7. The browser renders plain text and linked citations. It does not render model-supplied HTML. If OpenAI is not configured or fails, the interface reports that state rather than inventing an answer.

External data refresh follows another protected route: editor → backend → approved NESO endpoint → numeric/date validation → new D1 metric → visible reporting/retrieval timestamps. On source failure, existing records are not changed.

Deployment boundary: the site initially remains owner-private. Public reading and class access depend on a later explicit sharing change. Local sign-in is a development simulation; hosted authentication is separately provided by Sites.
