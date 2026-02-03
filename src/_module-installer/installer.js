const fs = require('node:fs/promises');
const path = require('node:path');

/**
 * Security Suite (Nightmare Team) Installer
 */
async function install(options) {
  const { projectRoot, config, logger } = options;
  const log = logger || console;

  try {
    log.log('🚨 INSTALLING SECURITY SUITE (NIGHTMARE TEAM)...');
    log.log('Remember: Constant Vigilance!');

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
      if (!(await fs.access(fullPath).then(() => true).catch(() => false))) {
        await fs.mkdir(fullPath, { recursive: true });
      }
    }

    // 2. Initialize Memory from template (DO NOT OVERWRITE)
    const memoryPath = path.join(projectRoot, 'sidecars/security-architect/memories.md');
    const templatePath = path.join(projectRoot, 'sidecars/security-architect/memories.template.md');

    const memoryExists = await fs.access(memoryPath).then(() => true).catch(() => false);
    if (!memoryExists) {
      const templateExists = await fs.access(templatePath).then(() => true).catch(() => false);
      if (templateExists) {
        log.log('Initializing security architect memory from template...');
        await fs.copyFile(templatePath, memoryPath);
      }
    } else {
      log.log('✓ Existing security architect memory detected. Keeping it safe.');
    }

    // 3. Create threat artifacts directory
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
        log.log(`Creating threat artifacts directory: ${dirPath}`);
        await fs.mkdir(dirPath, { recursive: true });
      }
    }

    log.log('✓ Security Suite installation complete.');
    log.log('WARNING: Any security breach will be met with extreme prejudice.');
    return true;
  } catch (error) {
    log.error(`Error installing Security Suite: ${error.message}`);
    return false;
  }
}

module.exports = { install };
