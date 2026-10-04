---
name: qe-coverage-analysis
description: Use when reading coverage reports, finding untested lines or branches, comparing coverage, or prioritizing coverage gaps.
---

# QE Coverage Analysis

Treat coverage as evidence about what executed, not proof that behavior is correct. Prioritize meaningful gaps over a target percentage alone.

For Pi's AQE tool discovery and safety rules, read `../../references/aqe-mcp-usage.md` relative to this skill directory.

## Workflow

1. Identify the repository, changed files, test framework, coverage command, and available report (for example, LCOV, Istanbul, or c8). Check that the report is current and belongs to this checkout.
2. Search AQE MCP for `coverage_analyze_sublinear` or `qe/coverage/gaps`; inspect the selected tool's schema before passing paths or thresholds. If the reports or scope are unavailable, ask for them or explain what is missing.
3. Separate line, branch, and function gaps. Prioritize uncovered behavior by change risk, security or data impact, and critical execution paths—not by raw line count.
4. Recommend specific tests for high-priority gaps, including the expected observable behavior. Use `qe-test-generation` when test creation is requested.
5. After new tests run, re-check the relevant coverage report and state its scope and timestamp. Do not claim coverage improved based only on generated tests.

## Report

List the report/source scope, the highest-risk uncovered paths, why they matter, proposed test cases, and any limitation (stale data, excluded files, or missing branches). Distinguish measured coverage from inferred risk.
