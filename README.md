# Security Suite (Nightmare Team)

HARDENED security orchestration and threat modeling module.

Enforces Constant Vigilance via multi-agent validation. NOT FOR THE FAINT OF HEART.

---

## Overview

A robust, character-driven security ecosystem designed to enforce "Security First" principles across the entire development lifecycle. The "Nightmare Team" covers everything from pre-mortem analysis to active penetration testing.

---

## Installation

```bash
bmad install security
```

---

## Quick Start

1. Start with a **Pre-Mortem** analysis (Morticia) during the design phase.
2. Follow **Moody's** secure architecture requirements.
3. Run a **Compliance Audit** (Barnaby) after implementation.
4. Set **Sherlock** loose for a final penetration test.

**For detailed documentation, see [docs/](docs/).**

---

## Components

### Agents

- 👁️ **Moody (Security Architect):** Orchestrator & Team Lead.
- ⚰️ **Morticia (Threat Modeling):** Pre-Mortem & Risk Analysis.
- 📋 **Barnaby (Security Auditor):** Compliance (OWASP/GDPR) & Static Analysis.
- 🕵️‍♂️ **Sherlock (Penetration Tester):** Active Exploitation & Dynamic Analysis.

### Workflows

- **Master Security Workflow:** Full end-to-end security pipeline.
- **Pre-Mortem Analysis:** Predicting failure before it happens.
- **Compliance Audit:** Nervous but precise code checking.
- **Penetration Test:** Active attack simulations.

---

## Configuration

The module supports these configuration options (set during installation):

- `security_defcon_level`: Initial Security DEFCON level (1-5).
- `threat_artifacts_folder`: Location for security reports and "death lists".
- `compliance_standards`: Standards to enforce (OWASP, GDPR, etc.).

---

## Documentation

For detailed user guides and documentation, see the **[docs/](docs/)** folder:

- [Getting Started](docs/getting-started.md)
- [Agents Reference](docs/agents.md)
- [Workflows Reference](docs/workflows.md)
- [Examples](docs/examples.md)

---

## Development Status

- [x] Agents: 4/4 agents implemented.
- [x] Workflows: 4/4 workflows implemented (Ready for use).

See TODO.md for detailed status.

---

## Development Environment Note

This repository includes `.github/` and `.gemini/` folders which were used during the development of this module with the BMAD framework. These are not required for the module's operation and can be safely ignored or removed if you are not planning to contribute to the module's development.

---

## Author

Created via BMAD Module workflow. Lead Architect: Alastor Moody.

---

## License

Part of the BMAD framework.
