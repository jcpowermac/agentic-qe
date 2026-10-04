---
name: qe-chaos-resilience
description: Use when testing recovery from network loss, latency, process failure, resource pressure, or other controlled faults.
---

# QE Chaos Resilience

Use a bounded experiment to verify a defined recovery behavior, with evidence that the system returned to its expected state.

For Pi's AQE tool discovery and safety rules, read `../../references/aqe-mcp-usage.md` relative to this skill directory.

## Workflow

1. Define the service, dependency, fault, expected behavior, and measurable recovery condition. Record baseline availability, latency, and error rate.
2. Confirm the environment and authorization. Do not inject faults into production, shared clusters, or customer data without explicit approval. Set a blast-radius limit, duration, rollback, and abort threshold.
3. Use Pi `tool_search` to find AQE's `chaos_test`; inspect its schema and confirm it matches the approved target and fault before calling it. If it does not, use only the project's established chaos harness.
4. Exercise one fault at a time. Observe detection, containment, failover/retry behavior, and recovery. Stop if impact exceeds the agreed limit.
5. Restore the target and verify health. Report actual signals, impact window, recovery time, and any residual damage or missing observability.

## Fault classes

Consider dependency unavailability, network partition or latency, process restart, and resource pressure only when the environment can isolate them safely. Select a fault because it tests a specific failure mode; do not combine faults until each individual response is understood.

A passing experiment must show the expected recovery signal. A tool call that completed, a process that restarted, or an alert that fired is not by itself proof of resilience.
