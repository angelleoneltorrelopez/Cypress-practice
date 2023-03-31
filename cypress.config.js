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

const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { pa11y } = require("@cypress-audit/pa11y");

module.exports = defineConfig({
 
  e2e: {
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
        pa11y: pa11y(console.log.bind(console)),
      });
      // implement node event listeners here
      allureWriter(on, config);
            return config;
    },
    experimentalRunAllSpecs: true,
    experimentalWebKitSupport: true,
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity: false,
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
