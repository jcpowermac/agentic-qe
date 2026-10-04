---
name: tdd-london-chicago
description: Use when practicing test-driven development or choosing between London (interaction-focused) and Chicago (state/behavior-focused) testing.
---

# TDD: London and Chicago Schools

Write the smallest failing test that expresses the behavior, then implement only enough to pass it. Choose test style based on the boundary being tested, not ideology.

For Pi's AQE tool discovery and safety rules, read `../../references/aqe-mcp-usage.md` relative to this skill directory.

## Choose a style

- **London / outside-in:** use focused test doubles at collaborator boundaries when the contract is about communication, orchestration, or a difficult external dependency. Assert meaningful observable interactions, not private call choreography.
- **Chicago / inside-out:** use real collaborators where practical and assert state changes, invariants, and externally visible behavior. Prefer it for domain logic and integration confidence.
- Mix styles at different boundaries when useful. Keep mocks at system edges and avoid tests whose only value is mirroring the current implementation.

## Red-green-refactor

1. Inspect existing tests, framework, and conventions. State the behavior and choose the boundary/style.
2. Write one focused test, run it, and confirm it fails for the expected missing behavior (not a setup error).
3. Make the minimum implementation change. Run the new test and relevant suite; both must pass before refactoring.
4. Refactor while keeping the tests green. Check that assertions still describe behavior, not incidental structure.
5. Report the test command and outcome. If the first test passes before any implementation, explain what existing behavior already satisfies it and choose a real gap instead.

Use AQE's `test_generate_enhanced` only after discovering it through Pi's MCP tools and only as a test-design aid. Review generated assertions and verify RED/GREEN locally; tool output does not replace those steps.
