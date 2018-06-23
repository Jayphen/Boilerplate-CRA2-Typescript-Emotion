// const { injectBabelPlugin } = require("react-app-rewired");
const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest
} = require("react-app-rewire-typescript-babel-preset");

module.exports = {
  webpack: function(config, env) {
    config = rewireTypescript(config);
    return config;
  },
  // babel: function(config, env) {
  //   return rewireEmotion(config, env, { inline: true });
  // },
  jest: function(config) {
    return rewireTypescriptJest(config);
  }
};
