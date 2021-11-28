// eslint-disable-next-line @typescript-eslint/no-var-requires
const { startDevServer } = require("@cypress/webpack-dev-server");
const webpack = require("@cypress/webpack-preprocessor");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpackConfig = require("../../webpack.cypress");

module.exports = (on, config) => {
  on("dev-server:start", (options) =>
    startDevServer({ options, webpackConfig })
  );

  // on("file:preprocessor", (options) => webpack(options, webpackConfig));

  return config;
};
