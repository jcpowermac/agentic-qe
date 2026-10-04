---
name: qe-quality-assessment
description: Use when assessing code quality, test health, release readiness, or quality-gate results for a repository or service.
---

# QE Quality Assessment

Base a quality verdict on observed evidence and explicit gates. Keep missing evidence distinct from a failed check.

For Pi's AQE tool discovery and safety rules, read `../../references/aqe-mcp-usage.md` relative to this skill directory.

## Workflow

1. Clarify the target, intended release/environment, and required quality gates. Inspect the repository's actual test, lint, coverage, and build commands.
2. Search AQE MCP for `quality_assess` and inspect its schema. Provide the real scope and gate requirements; do not assume defaults match the project.
3. Gather the requested signals. Where a signal is absent or stale, mark it unknown rather than infer a pass. Use focused checks before broad suites when the target is a change.
4. Compare measurements against the stated gates. Explain failures with source evidence; do not turn a numeric score into a release decision without the agreed threshold and context.
5. Return a clear pass/fail/blocked verdict, the evidence and commands behind it, top risks, and the next actions needed to reach a decision.

## Guardrails

Do not deploy, approve a pipeline, or alter a production release based only on an assessment result. Keep remediation separate from measurement unless the user requested fixes. Report uncertainty explicitly when the MCP tool lacks data or cannot inspect the target.
