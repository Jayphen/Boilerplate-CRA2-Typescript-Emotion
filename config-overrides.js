// const { injectBabelPlugin } = require("react-app-rewired");
const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
  rewireTSLint
} = require("react-app-rewire-typescript-babel-preset");

module.exports = {
  webpack: function(config, env) {
    config = rewireTypescript(config);
    config = rewireTSLint(config /* {} - optional tslint-loader options */);
    return config;
  },
  // babel: function(config, env) {
  //   return rewireEmotion(config, env, { inline: true });
  // },
  jest: function(config) {
    return rewireTypescriptJest(config);
  }
};
