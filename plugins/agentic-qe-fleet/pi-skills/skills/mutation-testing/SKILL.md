---
name: mutation-testing
description: Use when evaluating whether tests detect realistic code defects, measuring mutation score, or investigating surviving mutants.
---

# Mutation Testing

Mutation testing checks whether assertions detect behavior changes; line coverage alone cannot establish test effectiveness.

For Pi's AQE tool discovery and safety rules, read `../../references/aqe-mcp-usage.md` relative to this skill directory.

## Workflow

1. Identify the target, test framework, and mutation runner already configured in the repository. Confirm the ordinary tests pass before interpreting mutant results.
2. Search AQE MCP for mutation-testing support. The verified AQE tool list has no dedicated mutation tool; if search finds none, use the repository's configured runner (such as Stryker) only when it is installed and configured. Do not invent AQE commands or claim the MCP server ran mutations.
3. Start with a narrow target and representative tests. Record the runner, scope, and baseline before running it.
4. Review surviving mutants. Add or improve tests for meaningful missed behavior; classify equivalent or unreachable mutants instead of blindly chasing a score.
5. Re-run the targeted tests and mutation runner after changes. Report killed, survived, timed-out, and excluded mutants separately, with the denominator and scope.

## Interpretation

Mutation score is meaningful only with a stated scope and mutation set. A high score is not proof of correctness; a low score is a lead to investigate. Never remove a valid assertion solely to satisfy a score threshold.
