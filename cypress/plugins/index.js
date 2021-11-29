// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpackConfig = require("../../webpack.cypress");
// import { findBrowser } from "./browsers";
import { startDevServer } from "@cypress/webpack-dev-server";

module.exports = (on, config) => {
  on("dev-server:start", (options) => {
    config.config.port = 5000;
    return startDevServer({ options, webpackConfig });
  });

  return config;
};
