import { defineConfig } from "cypress";
const  {configureAllureAdapterPlugins} = require ('@mmisty/cypress-allure-adapter/plugins');
//import allureWriter from '@shelex/cypress-allure-plugin/writer';
const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('resolve');

export default defineConfig({
  e2e: {
    retries: {
      runMode: 2,
      openMode: 1
    },
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      const version = config.env.version || 'dev';
      config.env = require(`./cypress/config/url/${version}.json`);
      config.baseUrl = config.env.baseUrl;
      const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', {baseDir: config.projectRoot}),
      };
      on('file:preprocessor', cucumber(options));

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    env: {
      allure: true,
      allureResultsPath: 'allure-results',
    },
  },

});
