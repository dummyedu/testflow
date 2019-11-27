module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'false',
        corejs: 'core-js@3',
        targets: {
          chrome: 68,
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    '@babel/plugin-syntax-dynamic-import',
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  overrides: [
    {
      test: /\.tsx?$/,
      plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
    },
  ],
};
