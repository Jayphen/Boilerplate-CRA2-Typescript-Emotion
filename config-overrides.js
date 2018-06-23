const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
  rewireTSLint
} = require("react-app-rewire-typescript-babel-preset");
const { rewireEmotion } = require("react-app-rewire-emotion");

module.exports = {
  webpack: function(config, env) {
    config = rewireTypescript(config);
    config = rewireTSLint(config /* {} - optional tslint-loader options */);
    config = rewireEmotion(config, env, { inline: true });
    return config;
  },
  jest: function(config) {
    return rewireTypescriptJest(config);
  }
};
