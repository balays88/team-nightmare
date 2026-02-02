# TODO: Security Suite (Nightmare Team)

Development roadmap for security module.

---

## Agents (DONE)

- [x] Moody (Security Architect)
- [x] Morticia (Threat Model)
- [x] Barnaby (Security Auditor)
- [x] Sherlock (Penetration Tester)

---

## Workflows (DONE)

- [x] Master Security Workflow
  - [x] Defined spec
  - [x] Implementation of orchestration logic
- [x] Pre-Mortem Analysis
  - [x] Defined spec
  - [x] Sidecar workflows implemented (STRIDE, Critique, etc.)
- [x] Compliance Audit
  - [x] Defined spec
  - [x] Sidecar scan logic implemented
- [x] Penetration Test
  - [x] Defined spec
  - [x] Sidecar attack simulation logic implemented

---

## Installation Testing

- [ ] Test installation with `bmad install security`
- [ ] Verify DEFCON level prompts work
- [ ] Verify directory creation for artifacts

---

## Next Steps

1. Test the Master Workflow with a sample project.
2. Refine Barnaby's panic triggers based on real-world edge cases.
3. Expand Sherlock's exploit methods library.
4. Finalize the "Death List" format for cross-agent communication.

---

_Last updated: 2026-02-02_
