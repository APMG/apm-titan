const path = require('path');

// Extends Storybook's default config using the method detailed here:
// https://storybook.js.org/configurations/custom-webpack-config/#full-control-mode--default
module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  });

  return defaultConfig;
};
