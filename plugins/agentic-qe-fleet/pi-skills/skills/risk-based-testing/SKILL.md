---
name: risk-based-testing
description: Use when prioritizing tests by change risk, impact, likelihood, or limited testing time.
---

# Risk-Based Testing

Spend testing effort where failure would matter most. Make risk reasoning traceable to repository evidence rather than a fabricated score.

For Pi's AQE tool discovery and safety rules, read `../../references/aqe-mcp-usage.md` relative to this skill directory.

## Workflow

1. Define the release or change scope, affected users and systems, constraints, and available testing time. Inspect the diff, dependencies, and relevant incident or coverage evidence.
2. Search AQE MCP for `defect_predict`, coverage analysis, or quality assessment tools. Inspect each schema and use only signals the tool can actually measure for this target.
3. Prioritize by plausible failure likelihood and impact: data/security consequences, user exposure, code complexity, change size, dependencies, and history of defects or flaky tests.
4. Select tests that exercise the highest-risk behaviors and boundaries first. Include regression, integration, and operational checks where they address a named risk.
5. Present a ranked test plan with evidence and residual risks. If you use numeric scores, identify the input data and scoring method; otherwise keep the ranking qualitative.

## Guardrails

Do not treat coverage, a model prediction, or a risk score as certainty. Separate measured facts from judgment. If the changed files, failure history, or target environment are unknown, ask for that information or mark the ranking provisional.
