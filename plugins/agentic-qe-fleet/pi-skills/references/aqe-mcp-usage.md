# Using Agentic QE from Pi

The `agentic-qe` MCP server exposes a large, deferred tool set. Find the actual tool before calling it; do not assume a tool is active or invent its arguments.

1. Use Pi's `tool_search` with `agentic-qe` and the task domain (for example, `test generation`, `coverage gaps`, `run tests`, or `chaos experiment`).
2. Read the returned tool description/schema, then call the best-matching tool with repository paths and requested scope.
3. Check the tool result for errors, scope, and artifacts. Use Pi's file/test tools to inspect generated files or run project tests when relevant.
4. Report what was measured versus inferred. If no matching MCP tool is found, say so and use an existing project command only when appropriate; never pretend AQE performed an operation it did not expose.

## Verified tool names

These names appeared in AQE's MCP tool list. Search for them by purpose; Pi may normalize names when it activates a result.

| Goal | AQE MCP tool |
|---|---|
| Generate tests | `test_generate_enhanced` |
| Execute tests | `test_execute_parallel` |
| Analyze coverage | `coverage_analyze_sublinear` or `qe/coverage/gaps` |
| Assess quality | `quality_assess` |
| Predict likely defects | `defect_predict` |
| Scan security | `security_scan_comprehensive` |
| Run a chaos test | `chaos_test` |

Mutation testing has no dedicated tool in the verified list. Search first; if none exists, use only the mutation runner already configured in the repository and state that it ran locally rather than through AQE MCP.

## Safety and result quality

- Start with the narrowest target and inspect relevant project files/configuration before choosing a tool.
- Do not call destructive or production-impacting operations without explicit user authorization. In particular, treat fault injection, deleting memory, and approving/running pipelines as consequential actions.
- A tool's successful response is not proof that generated code passes. Inspect the files and run the requested checks.
- Do not expose tokens, credentials, or persistent AQE database contents in prompts or reports.
