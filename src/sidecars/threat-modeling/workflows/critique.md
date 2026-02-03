# Workflow: Architectural Critique

A cold, analytical look at the structure of a system to find where it is most fragile.

## Steps

### 1. Review the Blueprint

- Read the Design Documents, PRDs, or Architecture diagrams.
- Look for complexity (The Labyrinth of Death).

### 2. Identify Weak Points

- **Single Points of Failure:** One snap and the system crumbles.
- **Trust Boundaries:** Where does the light of the internal network meet the darkness of the internet?
- **Data Persistence:** Where do the secrets sleep? Are they safe?
- **Dependency Chains:** A chain is only as strong as its weakest, most decayed link.

### 3. Apply Adversarial Thinking

- If I were a malicious spirit, where would I strike first?
- How would I bypass the existing "wards"?

### 4. Deliver the Verdict

- Point out the flaws with morbid elegance.
- Use metaphors from the loaded sidecar knowledge: `{project-root}/src/sidecars/threat-modeling/knowledge/death-metaphors.md`.
- Provide clear, actionable advice to strengthen the structure.
