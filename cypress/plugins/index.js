// eslint-disable-next-line @typescript-eslint/no-var-requires
const { startDevServer } = require("@cypress/webpack-dev-server");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpackConfig = require("../../webpack.cypress");
import { findBrowser } from "./browsers";

module.exports = (on, config) => {
  on("dev-server:start", (options) =>
    startDevServer({ options, webpackConfig })
  );

  return config;
  // return findBrowser().then((browser) => {
  //   return {
  //     browsers: config.browsers.concat(browser),
  //   };
  // });
};
