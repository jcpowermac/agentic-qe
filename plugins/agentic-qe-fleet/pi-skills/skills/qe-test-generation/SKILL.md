---
name: qe-test-generation
description: Use when creating tests for changed code, filling coverage gaps, or generating unit, integration, contract, property, or end-to-end tests.
---

# QE Test Generation

Generate tests that detect behavioral defects and fit the target repository, rather than maximizing test count.

For Pi's AQE tool discovery and safety rules, read `../../references/aqe-mcp-usage.md` relative to this skill directory.

## Workflow

1. Read the target code, adjacent tests, package scripts, and test configuration. Identify framework, conventions, behavior boundaries, external dependencies, and existing gaps.
2. Search AQE MCP for `test_generate_enhanced`; inspect its input schema and give it the concrete target, framework, and requirements. Do not guess parameters or claim the tool edited files unless its result confirms that.
3. Lead with durable assertions: public contracts, invariants, boundary behavior, or properties. Add example-based tests for important cases and implementation-level tests only where useful.
4. Include meaningful negative, boundary, and error-path cases. Mock external boundaries, not the behavior under test. Avoid duplicate tests and brittle assertions on incidental implementation details.
5. Review generated tests against project conventions. Keep the diff focused, run the targeted tests, and fix failures caused by the new tests. Report created paths and verification results.

## Durable-first check

Ask: would this test still be valuable if the implementation were rewritten in another language? If not, anchor it to an observable contract or invariant where possible. Coverage is useful evidence, but a passing generated test is not proof it would catch a defect; examine what behavior each assertion protects.

If the target or expected behavior is ambiguous, ask before generating code. Do not overwrite existing tests without inspecting them.
