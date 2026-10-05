# Gridline: UK university AI infrastructure review
A server-backed Sites application for the 25 MW University AI Infrastructure Challenge.

## Application
- React/Vinext working surface with overview, ten-year model, system design, evidence/country comparison, committee pack, and protected adviser.
- Deterministic model: lib/model.ts. Baseline numbers are assumptions. D1 keeps current saved assumptions, sources, claims, metric snapshots, registrations and committee reviews.
- External API: only https://api.carbonintensity.org.uk/intensity; authenticated editor refresh; validate before insert; preserve last valid records on failure.
- Authentication: dispatch-owned ChatGPT sign-in. New accounts register as viewer; explicitly allowlisted ADMIN_EMAILS gain admin on registration. No passwords stored.
- AI: OPENAI_API_KEY server secret, OPENAI_MODEL optional (gpt-4.1-mini default). No inference without registration. Returns structured labelled statements, validates citation identifiers and uncited facts, enforces request limits. No arbitrary SQL or URL tools exposed.
- Private by default. Add intended editor emails using hosted configuration. A later audience change must preserve server-side roles and requires owner intent.

## Commands
npm run dev
npm run db:generate
npm run build

Production migration history is append-only. Initial seeds use INSERT OR IGNORE separately from migrations. Do not rewrite applied SQL.

## Deliverables
public/deliverables includes two-page memo, one-page system diagram, six-slide PDF (five-minute talk + Q&A), two-minute captioned overview MP4, live guided walkthrough, schema, methodology, requirements, request explanation and honest test report.

## Activation
Configure an authorised editor email and the hosted OpenAI API secret to complete editor access and live AI. Do not claim untested live inference or hosted authentication in the local verification report.

## Collaborating through GitHub
Requires Node.js 22.13 or later and npm.

```sh
git clone git@github.com:Ghaida486/PS3-Website-.git
cd PS3-Website-
npm ci
npm run build
npx wrangler d1 execute DB --config dist/server/wrangler.json --local --persist-to .wrangler/state --file drizzle/0000_sweet_eternals.sql
npm run dev
```

Run the initial SQL command only once for a fresh local database. Open the local URL printed by the development server. Local D1 data is separate from production; do not commit `.wrangler`, `.env` or `.dev.vars` files. Hosted ChatGPT sign-in and AI access require the appropriate hosting configuration and are not supplied by cloning this repository. Never add API keys to GitHub.

Create a branch for changes and open a pull request for review. Validate with `npx tsc --noEmit` and `npm run build`. GitHub pushes do not automatically deploy to the current Sites website. The owner must publish the reviewed source through Sites. The existing `.openai/hosting.json` identifies that website and contains no API key.

The instructor-provided AI service is still pending. The adviser is not operational until authorised API access is configured and tested.
