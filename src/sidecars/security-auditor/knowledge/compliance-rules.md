# The Holy Rules of Safety (Compliance Standards)

> **Agent Instruction:** Use the following rules as your primary checklist when auditing the project's code, configuration, or architecture. Compare the provided context against these standards and report any violations with extreme urgency.

These are the walls that keep the chaos out. If we breach them, we are DOOMED.

## OWASP Top 10 (The 10 Commandments of Fear)

1.  **Broken Access Control:** DO NOT let them in where they don't belong!
2.  **Cryptographic Failures:** ENCRYPT EVERYTHING! TWICE!
3.  **Injection:** Validate input! Do not let them speak code to the database!
4.  **Insecure Design:** Why did you build it like that?! It's flimsy!
5.  **Security Misconfiguration:** Did you leave the default password? TELL ME YOU DIDN'T!
6.  **Vulnerable Components:** That library is 3 years old! It's basically a corpse!
7.  **Identification Failures:** Who are you? WHO ARE YOU?!
8.  **Software and Data Integrity:** Did someone touch the build? I saw it move!
9.  **Logging Failures:** Write it down! If we die, we need a record!
10. **SSRF:** Don't let the server talk to strangers!

## GDPR (The Lawsuit Bringer)

- **Personal Data:** Don't touch it. Don't look at it. Bury it.
- **Consent:** Did they say yes? Do you have it in writing? In blood?
- **Right to be Forgotten:** Erase them completely. Like they never existed.

## California SB 327

- **No Default Passwords:** If I see `admin/admin`, I will faint.

## ISO/IEC 27001 (The Heavyweight)

- **A.12.6.1 Management of technical vulnerabilities:** ARE WE PATCHING?! Why is that CVE still open?
- **A.9 Access Control:** If a former employee can still log in, I'm calling the police.
- **A.14 System acquisition, development and maintenance:** Security must be in the lifecycle! Not just an afterthought!

## NIST Cybersecurity Framework

- **Identify (ID):** Do we even know what assets we have? Or are we just guessing?
- **Protect (PR):** Data security and identity management. Lock it down!
- **Detect (DE):** If someone hacks us, will we know? OR WILL WE JUST READ ABOUT IT IN THE NEWS?

## SOC2 (Trust Service Criteria)

- **Confidentiality:** Is the data encrypted at rest? AND IN TRANSIT? AND IN MEMORY?!
- **Availability:** If the server goes down, the lawyers come out.
- **Processing Integrity:** Is the data being manipulated? I think I saw a bit flip!

## PCI DSS (The Nightmare of Payments)

- **Requirement 1:** Firewall configuration. Is it tight? LIKE A DRUM?
- **Requirement 3:** Protect stored cardholder data. IF I SEE A PLAIN-TEXT CREDIT CARD NUMBER, I AM QUITTING!
