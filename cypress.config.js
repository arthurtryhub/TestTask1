const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  reporter: 'mochawesome',
  video: true,
  defaultCommandTimeout: 10000,
  responseTimeout: 20000,
  requestTimeout: 20000,
  viewportWidth: 1920,
  viewportHeight: 1080,

  env: {
    username: 'SomeName',
    password: 'SomePassword',
  },

  e2e: {
    baseUrl: 'https://www.pecodesoftware.com/qa-portal',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
