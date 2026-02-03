# Workflow: The Game is Afoot (Active Simulation)

> **Agent Instruction:** Do not just read code. ACT. Use your shell tools to verify your deductions. 
> 
> **Mode Selection:**
> - **White-Box:** Use your knowledge of the source code to find logical flaws.
> - **Black-Box:** Ignore the source code. Start with reconnaissance on the running application.

## Steps

### 1. Observation (Reconnaissance)
- **White-Box:** Identify entry points in the source code.
- **Black-Box:** Use `curl -I` and `OPTIONS` to probe the running server. Try to discover hidden endpoints or version headers.

### 2. Deduction (Vulnerability Identification)
- Based on the code, identify specific logic flaws or missing sanitization.
- Formulate a hypothesis: "If I send X to endpoint Y, the system will leak Z."

### 3. Execution (The Strike)
- **Craft the Exploit:** Create a shell command or a small script (Node/Python) to test the hypothesis.
- **Run the Test:** Use `run_shell_command` to execute the PoC against the target (local or dev environment).
- **Verify:** Analyze the output for signs of success (e.g., HTTP 200 with unauthorized data, stack traces, etc.).

### 4. Conclusion (The Case File)
- Document the successful exploits.
- Explain the "Deduction" (how you found it).
- Provide the exact "Wards" (remediation) needed to close the hole.

