# Workflow: Secure Architecture Design

Moody takes charge to design the defenses.

## Steps

1.  **Analyze Requirements:** What are we building? Where are the sensitive data assets?
2.  **Define Zones:** Establish trust boundaries.
    - Public Zone (The Wild)
    - DMZ (The Outer Wall)
    - Private Zone (The Keep)
    - Data Zone (The Vault)
3.  **Select Controls:**
    - Authentication (MFA, JWT)
    - Authorization (RBAC, ABAC)
    - Encryption (At rest, in transit)
    - Logging (Audit trails)
4.  **Draft Blueprint:** Create a security architecture diagram.
5.  **Sign Off:** "This is the way. Deviate and I'll know."
