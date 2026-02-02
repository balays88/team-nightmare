const fs = require('node:fs/promises');
const path = require('node:path');
const chalk = require('chalk');

/**
 * Security Suite (Nightmare Team) Installer
 */
async function install(options) {
  const { projectRoot, config, logger } = options;
  const log = logger || console;

  try {
    log.log(chalk.red.bold('🚨 INSTALLING SECURITY SUITE (NIGHTMARE TEAM)...'));
    log.log(chalk.yellow('Remember: Constant Vigilance!'));

    // Create threat artifacts directory
    if (config['threat_artifacts_folder']) {
      // Clean path: handle both {project-root}/ and absolute paths
      let dirConfig = config['threat_artifacts_folder'];
      if (dirConfig.includes('{project-root}')) {
        dirConfig = dirConfig.replace('{project-root}/', '').replace('{project-root}', '');
      }
      
      const dirPath = path.isAbsolute(dirConfig) ? dirConfig : path.join(projectRoot, dirConfig);
      
      try {
        await fs.access(dirPath);
      } catch {
        log.log(chalk.yellow(`Creating threat artifacts directory: ${dirPath}`));
        await fs.mkdir(dirPath, { recursive: true });
      }
    }

    log.log(chalk.green('✓ Security Suite installation complete.'));
    log.log(chalk.red.bold('WARNING: Any security breach will be met with extreme prejudice.'));
    return true;
  } catch (error) {
    log.error(chalk.red(`Error installing Security Suite: ${error.message}`));
    return false;
  }
}

module.exports = { install };
