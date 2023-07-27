import { defineConfig } from "cypress";

const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('resolve');

export default defineConfig({
  e2e: {
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      const version = config.env.version || 'dev';
      config.env = require(`./cypress/config/url/${version}.json`);
      config.baseUrl = config.env.baseUrl;
      const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
      };
      on('file:preprocessor', cucumber(options));

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});
