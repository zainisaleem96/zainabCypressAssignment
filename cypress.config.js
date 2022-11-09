const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      if(config.env.ENVIRONMENT=="assignment"){
        return{
          baseUrl: "https://parabank.parasoft.com/parabank/",
          specPattern:"cypress/e2e/assignment/**/*.cy.js",
          chromeWebSecurity: false,
          screenshotsFolder: "cypress/screenshots",
          videosFolder: "cypress/videos",
          defaultCommandTimeout: 10000
        }

      }
      else if(config.env.ENVIRONMENT=="session03"){
        return{
          baseUrl: "https://www.saucedemo.com/",
          specPattern:"cypress/e2e/session03/**/*.cy.js",
          chromeWebSecurity: false,
          screenshotsFolder: "cypress/screenshots",
          videosFolder: "cypress/videos",
          env :{
            seconUser: 'locked_out_user',
            secondPass: 'secret_sauce'
          }
        }

      }
    },
  },
});
