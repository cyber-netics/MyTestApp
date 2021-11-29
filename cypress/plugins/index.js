// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpackConfig = require("../../webpack.cypress");
import { startDevServer } from "@cypress/webpack-dev-server";
// import { findBrowser } from "./browsers";

module.exports = (on, config) => {
  on("dev-server:start", (options) => {
    config.port = 5000;
    return startDevServer({ options, webpackConfig });
  });

  return config;
};
