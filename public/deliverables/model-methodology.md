# Gridline model methodology
Initial baseline: 5 October 2026. All monetary values are GBP at constant prices; all costs are planning assumptions, not supplier quotes.

Productive demand = 16,000 GPUs × 8,760 hours × utilisation. Base utilisation is 65%, producing 91.104m GPU-hours/year. Half-utilisation stress halves this common demand for all choices.

Build: 25 MW site envelope, 20 MW IT, 16,000 GPUs. Hybrid: 10 MW site envelope, 8 MW IT, 6,400 GPUs; local utilisation capped at 75%, remaining useful demand leased. No automatic future expansion. Lease: no owned plant.

Base inputs: PUE 1.25; electricity £0.15/kWh; lease £2.50/productive GPU-hour; fleet £25,000/GPU including host share; facility £10m/site MW; grid £30m/25 MW (scaled for hybrid). Facility/grid construction in years 0–1; GPU delivery immediately before opening in year 3 (year 4 for delay). Bridge leases meet demand in service years before energisation. GPUs refreshed every four operating years at constant real price. Year 0 is pre-service; the comparison covers service years 1–10.

Annual site GWh = full IT MW × PUE × 8.76 × [idle fraction + (1 − idle fraction) × productive utilisation]. Idle fraction: 35%. This is a load proxy requiring measured workload calibration. Lease-provider energy is excluded from site electricity; do not interpret this as total system carbon savings.

Staff: £5m/year build, £3m/year hybrid; pre-opening overhead £1m × scale/year. Maintenance: 2.5% of facility capex + 3% of original GPU capex/year. Network: £1.5m × scale/year owned; £0.5m/year while lease-only. Storage/network capex is included in facility allowance.

60% facility/grid debt; 6% interest, 10 operating-year straight-line principal, remaining balance repaid at end of year 10. GPUs cash-funded. Project costs = capex + opex + interest; equity cash = project costs − debt draw + principal repayment. Do not add principal again to project costs.

Discounted unit cost = present cost / present productive hours at an 8% discount rate. Cash before opening includes gross capex, bridge leasing and interest before owned opening. Opex is the first owned operating year (lease year 1), excluding capital replacement and financing. Capital at risk = facility + grid + fleet + pre-opening interest with zero assumed recovery; it is gross exposure, not expected loss.

Unused capacity cost is an allocation: unused fraction × (facility/grid divided by 20 + fleet divided by 4 + fixed annual operations). It is already represented in the model, not an extra expense.

No salvage, tax, inflation, grants, income, financing fees or unpriced extraordinary replacement. Debt draw timing is simplified annually. Compare vendor GPU performance and productive/billed hours; quote egress and minimum commitments. Lease assumed monthly cancellable with zero deposit. Any binding minimum must be added to risk exposure. The 25 MW design is not justified without member contracts and engineering evidence.
