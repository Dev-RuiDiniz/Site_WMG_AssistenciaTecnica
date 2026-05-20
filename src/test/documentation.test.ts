import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const projectRoot = resolve(__dirname, '../..');

const requiredFiles = [
  'README.md',
  'docs/arquitetura.md',
  'docs/deploy.md',
  'docs/design-system.md',
  'docs/quality.md',
  '.env.example',
];

const requiredReadmeEntries = [
  'docs/arquitetura.md',
  'docs/deploy.md',
  'docs/design-system.md',
  'docs/quality.md',
  'npm install',
  'npm run dev',
  'npm test',
  'npm run lint',
  'npm run typecheck',
  'npm run build',
];

const forbiddenEnvPatterns = [
  /token\s*=\s*[^\s#]+/i,
  /secret\s*=\s*[^\s#]+/i,
  /password\s*=\s*[^\s#]+/i,
  /api[_-]?key\s*=\s*[^\s#]+/i,
];

describe('documentation contract', () => {
  it('mantem os arquivos obrigatorios de documentacao versionados', () => {
    for (const filePath of requiredFiles) {
      expect(existsSync(resolve(projectRoot, filePath))).toBe(true);
    }
  });

  it('referencia comandos e documentos essenciais no README', () => {
    const readme = readFileSync(resolve(projectRoot, 'README.md'), 'utf-8');

    for (const entry of requiredReadmeEntries) {
      expect(readme).toContain(entry);
    }
  });

  it('mantem .env.example sem segredos reais', () => {
    const envExample = readFileSync(resolve(projectRoot, '.env.example'), 'utf-8');

    for (const pattern of forbiddenEnvPatterns) {
      expect(envExample).not.toMatch(pattern);
    }
  });
});
