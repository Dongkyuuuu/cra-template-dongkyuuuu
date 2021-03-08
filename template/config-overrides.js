const { alias } = require("react-app-rewire-alias");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");

module.exports = function override(config) {
  alias({
    "@": "./src",
  })(config);

  config = rewireReactHotLoader(config, env);

  return config;
};
