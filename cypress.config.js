/**
 * @file Config
 * @autor Angel Torre
 * @version 18/11/2022
 * @description Configuration file.
 *
 */
// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
            return config;
    },
    experimentalRunAllSpecs: true,
    experimentalWebKitSupport: true,
    baseUrl: 'https://www.saucedemo.com/',
    requestTimeout: 30000,
    responseTimeout: 50000,
    pageLoadTimeout: 10000,
    viewportHeight: 768,
    viewportWidth: 1366,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
    },
    env: {
      allureReuseAfterSpec: true,
      apiUrl: 'https://reqres.in/api',
    },
  },

  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
    },
  },
});
