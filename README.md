# SkillSentry

SkillSentry is a local-only Chrome Manifest V3 extension that statically checks Agent Skills, `SKILL.md` files, and MCP configuration pages before you install or run them.

## Why this project

Agent Skills and MCP tools are executable instructions with access to commands, files, and networks. SkillSentry makes common warning signs visible in the browser without uploading source code or calling a paid model.

## Features

- Prompt-injection checks with line-level evidence
- Dangerous shell and remote-pipe detection
- Credential and private-key access checks
- Potential data-exfiltration and webhook checks
- MCP package pinning and wildcard permission checks
- Obfuscation and hidden-Unicode checks
- Explainable score and `safe` / `review` / `danger` verdict
- Markdown copy and SARIF export for CI/security workflows
- Deterministic TypeScript rule engine with unit tests

## Development

```bash
pnpm install
pnpm test -- --run
pnpm lint
pnpm build
```

Load `dist/` from `chrome://extensions`, open a GitHub `SKILL.md` or MCP configuration, open the SkillSentry side panel, and choose **Scan page**.

### Publish on Windows

After the project-local GitHub CLI login is available, future pushes use:

```powershell
.\publish.ps1
```

The script uses a project-local credential helper and OpenSSL TLS configuration. `.gh/` is ignored and no token is stored in the repository.

## Security limits

This is a heuristic static checker, not a complete security scanner. A clean report does not prove that a skill is safe. Findings are evidence for review, not automatic permission to execute code. The extension processes page text locally and does not send it to a server.

## Architecture

```text
GitHub page -> content adapter -> pure rule engine -> findings
                                      |-> score/verdict
                                      |-> Markdown/SARIF exporters
                                      `-> side panel UI
```

The pure rule engine is easy to run in CI later because it has no Chrome dependency. Rules include stable IDs, severity, evidence, and remediation so a reviewer can trace every score.

## License

MIT
