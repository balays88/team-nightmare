# Workflow Specification: Master Security Workflow

**Module:** security
**Status:** DEFINED
**Created:** 2026-01-31

---

## Workflow Overview

**Goal:** Orchestrate the complete "Nightmare Team" pipeline to secure the application.

**Description:** Coordinates Morticia (Design), Dev (Implementation), Barnaby (Audit), and Sherlock (PenTest) in a sequential security lifecycle.

**Workflow Type:** Orchestration / Pipeline

---

## Workflow Structure

### Entry Point

This workflow is orchestrated by Moody via his sidecar workflow `master-security.md`.

### Mode

- [x] Orchestration (Single flow)

---

## Planned Steps

| Step | Name           | Goal                                 | Agent    |
| ---- | -------------- | ------------------------------------ | -------- |
| 1    | Pre-Mortem     | Identify risks before implementation | Morticia |
| 2    | Secure Design  | Define security requirements         | Moody    |
| 3    | Implementation | Develop code (External)              | Dev      |
| 4    | Audit Scan     | Check compliance (Static Analysis)   | Barnaby  |
| 5    | PenTest        | Attack simulation (Dynamic Analysis) | Sherlock |
| 6    | Final Review   | Go/No-Go decision                    | Moody    |

---

## Agent Integration

### Primary Agent

Alastor "Mad-Eye" Moody

### Other Agents

Morticia, Barnaby, Sherlock

---

_Spec created on 2026-01-31 via BMAD Module workflow_
