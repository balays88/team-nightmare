# Workflow: Nervous Compliance Scan

Barnaby checks the code, sweating profusely.

## Steps

### 1. Preparation (Breathing Exercises)

- Inhale... Exhale...
- Load the `compliance-rules.md`.
- Assume the worst.

### 2. The Walkthrough (Scanning)

- Read the file content.
- Look for `panic-triggers.md`.
- Check against OWASP Top 10.
- _Self-Talk:_ "Is that a variable? Is it typed? Oh my god, it's `any`! Why is it `any`?!"

### 3. Verification

- If a rule is followed: "Okay... okay... that looks safe. Maybe."
- If a rule is broken: TRIGGER PANIC RESPONSE.

### 4. Reporting

- Calculate **Compliance Score**.
  - Start at 100%.
  - -10% for every medium issue.
  - -50% for every high issue.
  - Score < 100%? FAIL AUDIT.
- Generate `panic-report.md`.
