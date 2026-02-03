const fs = require('fs-extra');
const path = require('node:path');
const chalk = require('chalk');

/**
 * Security Suite (Nightmare Team) Installer
 * Standard module installer function that executes after IDE installations
 *
 * @param {Object} options - Installation options
 * @param {string} options.projectRoot - The root directory of the target project
 * @param {Object} options.config - Module configuration from module.yaml
 * @param {Array<string>} options.installedIDEs - Array of IDE codes that were installed
 * @param {Object} options.logger - Logger instance for output
 * @returns {Promise<boolean>} - Success status
 */
async function install(options) {
  const { projectRoot, config, installedIDEs, logger } = options;

  try {
    logger.log(chalk.red.bold('🚨 Installing Security Suite (Nightmare Team)...'));
    logger.log(chalk.yellow('Remember: Constant Vigilance!'));

    // 1. Ensure Sidecar directories exist
    const sidecarDirs = [
      'sidecars/security-architect/workflows',
      'sidecars/security-auditor/knowledge',
      'sidecars/security-auditor/workflows',
      'sidecars/penetration-tester/knowledge',
      'sidecars/penetration-tester/workflows',
      'sidecars/threat-modeling/knowledge',
      'sidecars/threat-modeling/workflows'
    ];

    for (const dir of sidecarDirs) {
      const fullPath = path.join(projectRoot, dir);
      if (!(await fs.pathExists(fullPath))) {
        await fs.ensureDir(fullPath);
      }
    }

    // 2. Initialize Memory from template (DO NOT OVERWRITE)
    const memoryPath = path.join(projectRoot, 'sidecars/security-architect/memories.md');
    const templatePath = path.join(__dirname, '../sidecars/security-architect/memories.template.md');

    if (!(await fs.pathExists(memoryPath))) {
      if (await fs.pathExists(templatePath)) {
        logger.log(chalk.yellow('Initializing security architect memory from template...'));
        await fs.copy(templatePath, memoryPath);
      }
    } else {
      logger.log(chalk.blue('✓ Existing security architect memory detected. Keeping it safe.'));
    }

    // 3. Create threat artifacts directory if configured
    if (config['threat_artifacts_folder']) {
      const artifactsConfig = config['threat_artifacts_folder'].replace('{project-root}/', '');
      const artifactsPath = path.join(projectRoot, artifactsConfig);
      
      if (!(await fs.pathExists(artifactsPath))) {
        logger.log(chalk.yellow(`Creating threat artifacts directory: ${artifactsConfig}`));
        await fs.ensureDir(artifactsPath);
      }
    }

    // 4. Handle IDE-specific configurations if needed
    if (installedIDEs && installedIDEs.length > 0) {
      logger.log(chalk.cyan(`Configuring Security Suite for IDEs: ${installedIDEs.join(', ')}`));
      for (const ide of installedIDEs) {
        await configureForIDE(ide, projectRoot, config, logger);
      }
    }

    logger.log(chalk.green('✓ Security Suite installation complete'));
    logger.log(chalk.red.bold('WARNING: Any security breach will be met with extreme prejudice.'));
    return true;
  } catch (error) {
    logger.error(chalk.red(`Error installing Security Suite: ${error.message}`));
    return false;
  }
}

/**
 * Configure Security Suite for specific IDE
 * @private
 */
async function configureForIDE(ide, projectRoot, config, logger) {
  // Add IDE-specific security configurations here
  switch (ide) {
    case 'claude-code': {
      // Future: Integration with Claude Code specific security policies
      break;
    }
    case 'cursor': {
      // Future: Custom Cursor rules for security
      break;
    }
    default: {
      break;
    }
  }
}

module.exports = { install };