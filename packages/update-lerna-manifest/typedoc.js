module.exports = {
    src: [
        './src/update-lerna-manifest.ts',
    ],
    exclude: [
        './node_modules/**/*',
        './dist/**/*'
    ],
    mode: 'file',
    includeDeclarations: true,
    tsconfig: 'tsconfig.json',
    out: './doc',
    excludePrivate: true,
    excludeProtected: true,
    excludeExternals: true,
    excludeNotExported: true,
    readme: 'none',
    name: 'update-lerna-manifest',
    ignoreCompilerErrors: true,
    plugin: 'typedoc-plugin-markdown',
    listInvalidSymbolLinks: true,
    theme: 'markdown'
};
