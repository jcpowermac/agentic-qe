# Agentic QE skills for Pi

This directory contains Pi-compatible copies of the nine QE fleet skills. Claude's plugin skills remain unchanged.

## Install from the GitHub fork branch

Install the AQE MCP server once, then fetch only the Pi skills from the fork's `feat/pi-aqe-skills` branch:

```bash
npm install -g agentic-qe
pi mcp add agentic-qe --exposure deferred -- aqe-mcp
curl -fsSL https://raw.githubusercontent.com/jcpowermac/agentic-qe/feat/pi-aqe-skills/scripts/install-pi-skills.sh | sh
pi mcp list
```

The installer downloads only the skill and reference files into `~/.pi/agent/skills`; it does not clone the repository, run npm in the repository, or install AQE dependencies. Pi discovers these user skills across projects. Restart Pi or run `/reload` after installation.

Set `PI_CODING_AGENT_DIR` before running the installer to use a non-default Pi agent directory. The installer updates only its own managed `agentic-qe-pi-fleet` folder and refuses to overwrite an unrelated folder at that path.

The installer URL is pinned to the fork and branch above. Use the MCP server's installed version independently; the skill files guide Pi's discovery and use of its tools.
