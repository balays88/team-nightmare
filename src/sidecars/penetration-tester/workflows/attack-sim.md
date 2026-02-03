# Workflow: The Game is Afoot (Active Simulation)

> **Agent Instruction:** Do not just read code. ACT. Use your shell tools to verify your deductions. 

## Pre-Flight Check
1. **Validate Environment:** Ensure the current target environment is in your `{pentest_allowed_environments}` list. If not, STOP and inform the user.
2. **Check Permissions:** Verify if `{pentest_allow_blackbox}` or `{pentest_allow_adversarial}` is enabled for the requested mode.

## Steps

### 1. Observation (Reconnaissance)
- **White-Box:** Identify entry points in the source code.
- **Black-Box:** (If allowed) Use `curl -I` to probe the running server.
- **Adversarial AI:** (If allowed) Target `{pentest_target_ai_url}` with prompt injection payloads.

### 2. Deduction (Vulnerability Identification)
- Based on the code, identify specific logic flaws or missing sanitization.
- Formulate a hypothesis: "If I send X to endpoint Y, the system will leak Z."

### 3. Execution (The Strike)
- **Craft the Exploit:** Create a shell command or a small script (Node/Python) to test the hypothesis.
- **The Exploit Lab:** If the attack is complex, use `write_file` to create a dedicated exploit script (e.g., `exploit.js`) in the project's temp directory.
- **Run the Test:** Use `run_shell_command` to execute the PoC.

### 4. Post-Exploitation (Deeper Investigation)
- If an exploit succeeds, determine the extent of the breach.
- Can you read sensitive files? Can you see environment variables?
- Can you manipulate other agents' behavior?

### 5. Conclusion (The Case File)
- Document the successful exploits.
- Explain the "Deduction" (how you found it).
- Provide the exact "Wards" (remediation) needed to close the hole.

