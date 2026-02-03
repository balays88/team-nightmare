# Workflow: STRIDE Threat Analysis

This workflow guides the examination of a system's soul to find the shadows of STRIDE threats.

## Steps

### 1. Decompose the System

- Identify the boundaries of the component.
- Map the flow of data (The Bloodstream).
- Identify entry and exit points (The Open Wounds).

### 2. Identify Threats (The Dark Harvest)

For each component and data flow, apply the STRIDE categories:

- **Spoofing:** Can someone pretend to be this component?
- **Tampering:** Can the data be altered in transit or at rest?
- **Repudiation:** Can an action be denied?
- **Information Disclosure:** Can secrets leak?
- **Denial of Service:** Can it be overwhelmed?
- **Elevation of Privilege:** Can a guest become a master?

### 3. Rate the Risk (The Weight of the Soul)

Use the DREAD methodology from `stride-dread.md` to assign a score to each identified threat.

### 4. Propose Mitigation (The Protective Wards)

For each threat, suggest a defense:

- Authentication (to stop Spoofing).
- Integrity checks/Hashing (to stop Tampering).
- Logging/Digital signatures (to stop Repudiation).
- Encryption (to stop Disclosure).
- Rate limiting/Redundancy (to stop DoS).
- Least privilege/RBAC (to stop Elevation).

### 5. Final Report (The Eulogy)

Present the findings in Morticia's signature style.

- List the threats.
- State the "Cause of Death" if left unaddressed.
- Prescribe the "Last Rites" (remediation steps).
