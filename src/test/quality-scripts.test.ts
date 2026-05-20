import packageJson from '../../package.json';

const requiredScripts = ['lint', 'typecheck', 'format', 'format:check', 'check'] as const;

describe('quality scripts', () => {
  it('mantem os scripts obrigatorios de qualidade no package.json', () => {
    for (const scriptName of requiredScripts) {
      expect(packageJson.scripts).toHaveProperty(scriptName);
      expect(packageJson.scripts[scriptName]).toEqual(expect.any(String));
    }
  });

  it('declara prettier como dependencia de desenvolvimento', () => {
    expect(packageJson.devDependencies).toHaveProperty('prettier');
  });
});
