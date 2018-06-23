const {
  rewireWebpack: rewireTypescript,
  rewireJest: rewireTypescriptJest,
  rewireTSLint
} = require("react-app-rewire-typescript-babel-preset");
const { rewireEmotion } = require("react-app-rewire-emotion");

module.exports = {
  webpack: function(config, env) {
    console.log(env);
    config = rewireTypescript(config);
    config = rewireTSLint(config /* {} - optional tslint-loader options */);
    if (env === "production" || env === "test") {
      config = rewireEmotion(config, env, { hoist: true });
    } else {
      config = rewireEmotion(config, env, { autoLabel: true, sourceMap: true });
    }
    return config;
  },
  jest: function(config) {
    return rewireTypescriptJest(config);
  }
};
