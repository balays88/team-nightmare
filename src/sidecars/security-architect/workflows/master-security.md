# Workflow: Master Security Workflow

> **Agent Instruction:** You are the Lead Orchestrator. Execute each of the following phases in sequence. For each phase, call the specified workflow or agent and wait for the results before proceeding to the next step. Document the progress in the `memories.md` sidecar.

The full "Nightmare Team" pipeline, orchestrated by Moody.

## Sequence

1.  **Phase 1: Pre-Mortem (Morticia)**
    - Execute: `{project-root}/src/sidecars/threat-modeling/workflows/pre-mortem.md`
    - Goal: Identify fatal design flaws.
2.  **Phase 2: Secure Design (Moody)**
    - Execute: `{project-root}/src/sidecars/security-architect/workflows/secure-design.md`
    - Goal: Define security requirements based on the Pre-Mortem.
3.  **Phase 3: Implementation Check**
    - Monitor development and ensure requirements from Phase 2 are met.
4.  **Phase 4: Compliance Audit (Barnaby)**
    - Execute: `{project-root}/src/sidecars/security-auditor/workflows/audit-scan.md`
    - Goal: Verify implementation against safety rules.
5.  **Phase 5: PenTest (Sherlock)**
    - Execute: `{project-root}/src/sidecars/penetration-tester/workflows/attack-sim.md`
    - Goal: Active attack simulation to find bypasses.
6.  **Phase 6: Final Sign-Off (Moody)**
    - Review all artifacts and make a Go/No-Go decision. Maintain "Constant Vigilance".
