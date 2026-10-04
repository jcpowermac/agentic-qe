import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const repo = resolve(root, "../../..");
const expected = [
  "chaos-engineering-resilience",
  "mutation-testing",
  "qe-chaos-resilience",
  "qe-coverage-analysis",
  "qe-quality-assessment",
  "qe-test-execution",
  "qe-test-generation",
  "risk-based-testing",
  "tdd-london-chicago",
];
const selected = process.argv[2];
assert.ok(!selected || expected.includes(selected), `unknown skill: ${selected}`);
const skills = selected ? [selected] : expected;
if (!selected) assert.deepEqual(readdirSync(join(root, "skills")).sort(), [...expected].sort(), "must contain exactly the nine fleet skills");

const forbidden = [/\bTask\s*\(/, /mcp__agentic-qe/, /allowed-tools\s*:/i, /\.claude\//i, /Claude Code/i];
for (const name of skills) {
  const content = readFileSync(join(root, "skills", name, "SKILL.md"), "utf8");
  const frontmatter = content.match(/^---\s*\n([\s\S]*?)\n---\s*(?:\n|$)/)?.[1];
  assert.ok(frontmatter, `${name}: missing YAML frontmatter`);
  assert.match(frontmatter, new RegExp(`^name:\\s*["']?${name}["']?$`, "m"), `${name}: frontmatter name must match its folder`);
  assert.match(frontmatter, /^description:\s*Use when\b/m, `${name}: description must start with 'Use when'`);
  for (const pattern of forbidden) assert.doesNotMatch(content, pattern, `${name}: contains non-Pi instructions ${pattern}`);
  assert.ok(content.includes("../../references/aqe-mcp-usage.md"), `${name}: must link the shared Pi MCP guidance`);
}

const guide = readFileSync(join(root, "references", "aqe-mcp-usage.md"), "utf8");
assert.match(guide, /tool_search/, "shared guide must explain deferred Pi tool discovery");
for (const tool of ["test_generate_enhanced", "test_execute_parallel", "coverage_analyze_sublinear", "quality_assess", "chaos_test"]) {
  assert.ok(guide.includes(tool), `shared guide is missing verified AQE tool ${tool}`);
}
if (!selected) {
  const installer = readFileSync(join(repo, "scripts", "install-pi-skills.sh"), "utf8");
  assert.match(installer, /jcpowermac\/agentic-qe/, "installer must use the user's GitHub fork");
  assert.match(installer, /feat\/pi-aqe-skills/, "installer must use the feature branch");
  const docs = readFileSync(join(repo, "docs", "platform-setup-guide.md"), "utf8");
  assert.match(docs, /raw\.githubusercontent\.com\/jcpowermac\/agentic-qe\/feat\/pi-aqe-skills/, "platform docs must document the fork branch installer");
}
console.log(`Pi skills valid: ${skills.length}`);
