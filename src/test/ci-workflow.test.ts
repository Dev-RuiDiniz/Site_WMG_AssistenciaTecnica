import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentFile = fileURLToPath(import.meta.url);
const projectRoot = resolve(dirname(currentFile), '../..');
const workflowPath = resolve(projectRoot, '.github/workflows/ci.yml');

const requiredWorkflowContent = [
  'pull_request:',
  'push:',
  'main',
  'actions/checkout@v4',
  'actions/setup-node@v4',
  'node-version: 22',
  'npm install',
  'npm run lint',
  'npm run typecheck',
  'npm test',
  'npm run build',
];

describe('ci workflow contract', () => {
  it('versiona workflow de CI', () => {
    expect(existsSync(workflowPath)).toBe(true);
  });

  it('executa etapas minimas de qualidade', () => {
    const workflow = readFileSync(workflowPath, 'utf-8');

    for (const entry of requiredWorkflowContent) {
      expect(workflow).toContain(entry);
    }
  });

  it('nao depende de secrets no CI inicial', () => {
    const workflow = readFileSync(workflowPath, 'utf-8');

    expect(workflow).not.toMatch(/secrets\./i);
    expect(workflow).not.toMatch(/secret:/i);
  });
});
