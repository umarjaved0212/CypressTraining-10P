const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: 'http://automationpractice.com/index.php?controller=authentication&back=my-account'
      defaultCommandTimeout: 25000
    },
  },
});

