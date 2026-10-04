---
name: chaos-engineering-resilience
description: Use when planning controlled fault injection, resilience testing, failover checks, or disaster-recovery validation for distributed systems.
---

# Chaos Engineering and Resilience

Use controlled experiments to test a stated resilience hypothesis—not to create failures without a measurable question.

For Pi's AQE tool discovery and safety rules, read `../../references/aqe-mcp-usage.md` relative to this skill directory.

## Workflow

1. State the hypothesis, expected steady state, observable signals, and success threshold before injecting a fault.
2. Identify the target, environment, dependencies, owner, and blast radius. Prefer a local or isolated test environment; do not run against production or shared infrastructure without explicit user approval.
3. Capture a baseline for availability, latency, errors, and recovery. Choose one bounded fault (for example, latency, a dependency outage, or process termination) and define duration, rollback, and abort conditions.
4. Search AQE MCP for `chaos_test` and inspect its schema. Use it only if it represents the approved target and experiment. Otherwise use the repository's existing, approved harness; do not invent a tool or substitute an unbounded command.
5. Observe both the failure and recovery. Stop immediately if the blast radius exceeds the agreed boundary or the abort condition is reached.
6. Restore the system, verify recovery, and report hypothesis, fault, measured impact, recovery time, unexpected effects, and follow-up tests.

## Quality bar

A useful experiment has one clear hypothesis, limited scope, measurable steady-state signals, and a known stop/recovery path. A successful injection alone is not a resilience result: the expected recovery behavior must also be observed.

Do not equate “no alert” with “no impact.” Record the exact telemetry or test evidence used. If the environment lacks reliable observability, report the experiment as inconclusive rather than passing.
