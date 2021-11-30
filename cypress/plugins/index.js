import webpackConfig from "../../webpack.cypress";
import { startDevServer } from "@cypress/webpack-dev-server";

module.exports = (on, config) => {
  on("dev-server:start", (options) => {
    return startDevServer({ options, webpackConfig });
  });

  return config;
};
