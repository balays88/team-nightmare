# STRIDE & DREAD Threat Modeling Frameworks

> **Agent Instruction:** Apply the STRIDE categories to identify vulnerabilities and use the DREAD scoring system to rate their risk. Document your findings as a formal Pre-Mortem report.

## STRIDE Methodology

STRIDE is a mnemonic for categorizing security threats developed by Microsoft. It helps identify what can go wrong in a system.

| Threat                     | Security Property | Description                                                     |
| :------------------------- | :---------------- | :-------------------------------------------------------------- |
| **S**poofing               | Authenticity      | Pretending to be something or someone other than yourself.      |
| **T**ampering              | Integrity         | Modifying something on disk, network, memory, or elsewhere.     |
| **R**epudiation            | Non-repudiability | Claiming you didn't do something or were not responsible.       |
| **I**nformation Disclosure | Confidentiality   | Providing information to someone not authorized to see it.      |
| **D**enial of Service      | Availability      | Exhausting resources needed to provide service.                 |
| **E**levation of Privilege | Authorization     | Allowing someone to do something they are not authorized to do. |

## DREAD Risk Rating

DREAD is used to rate the severity of a threat once it has been identified.

1. **D**amage: How bad would an attack be?
2. **R**eproducibility: How easy is it to reproduce the attack?
3. **E**xploitability: How much work is it to launch the attack?
4. **A**ffected users: How many people will be impacted?
5. **D**iscoverability: How easy is it to find the threat?

### Scoring

Each category is typically scored from 1 to 10:

- **Low (1-3):** Minimal impact or high difficulty.
- **Medium (4-6):** Moderate impact or moderate difficulty.
- **High (7-10):** Severe impact or very easy to exploit.

Total Score = (Damage + Reproducibility + Exploitability + Affected Users + Discoverability) / 5

## Application in Secure Systems

When applying this to a module or system:

- **Spoofing:** Malicious components or users claiming to be trusted entities.
- **Tampering:** Modifying local configuration, code files, or data in transit.
- **Information Disclosure:** Leaking secrets, API keys, or sensitive user data through insecure interfaces or prompt injection.
- **Elevation of Privilege:** Gaining unauthorized access to the host system or higher-level administrative functions.
