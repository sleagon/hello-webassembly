module.exports = function(api) {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: {
          chrome: 60,
        },
      },
    ],
    ['@babel/preset-react'],
  ];
  const plugins = ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import'];

  return {
    presets,
    plugins,
  };
};
