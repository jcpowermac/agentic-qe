---
name: qe-test-execution
description: Use when running or selecting unit, integration, end-to-end, or affected tests, or investigating flaky test runs.
---

# QE Test Execution

Run the tests that answer the question with the smallest useful scope; never imply that a command passed when it was not run.

For Pi's AQE tool discovery and safety rules, read `../../references/aqe-mcp-usage.md` relative to this skill directory.

## Workflow

1. Inspect the repository's package scripts, test configuration, and changed files. Identify runner, relevant suite, required services, and whether tests mutate persistent data or external systems.
2. Search AQE MCP for `test_execute_parallel` and inspect its schema. Use it only when it can express the intended scope and safe execution settings; otherwise run the repository's documented test command through Pi's shell tool.
3. Prefer a focused suite first. Ask before tests that require unavailable services, run against production systems, or delete/overwrite persistent data. Do not widen the scope silently.
4. Review failures and logs. For a suspected flaky test, preserve the first result, then rerun narrowly and report the number of attempts; retries do not erase the initial failure.
5. Report exact command/tool, target scope, pass/fail counts, environment limitations, and relevant failure output. Inspect generated reports rather than assuming the test tool's summary is complete.

## Good execution

Parallelize only independent tests that do not share mutable state or external resources. Do not use retries to make a failing gate appear green. If no test data exists, say what fixture or setup is needed instead of inventing results.
