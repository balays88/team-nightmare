# Changelog

All notable changes to this project will be documented in this file.

## [0.1.1-beta.1] - 2026-02-03
### Changed
- Reorganized project structure to match official BMad module template.
- Moved module components to `src/` directory.
- Standardized metadata files (`package.json`, `CHANGELOG.md`, etc.).

## [0.1.3] - 2026-02-03
### Changed
- Sherlock: improved safety and reliability
	- Enforced safer pentest defaults and preserved existing `config.yaml` settings when present.
	- Initialize `sidecars/security-architect/memories.md` from template when missing (won't overwrite existing memory).
	- Improved installer robustness for creating sidecar directories and threat artifacts folder.
	- Refactored installer code to fix linting issues and make IDE-specific configuration scaffold explicit (unused params marked for future use).
	- New white-box mode: added support for controlled, instrumented white-box pentest workflows (local code access, authenticated scans, and richer findings output).
	- New black-box mode: added safe black-box reconnaissance workflows (network-only discovery, non-invasive probing, and environment whitelisting).

### Fixed
- Resolved linting errors in installer and ensured installer logs are clear and actionable.

## [0.1.0-beta.1] - 2026-02-02
### Added
- Initial release of the Security Suite (Nightmare Team).
- 4 specialized agents: Moody, Morticia, Barnaby, Sherlock.
- Hardened workflows for Pre-Mortem, Compliance Audit, and PenTesting.
- Interactive safety briefing and self-configuration for Sherlock.
