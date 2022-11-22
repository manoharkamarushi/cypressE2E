import { defineConfig } from 'cypress'

export default defineConfig({

  e2e: {
    projectId: "szgp4b",
    baseUrl: 'https://www.way2automation.com/angularjs-protractor/banking/#/login',
    chromeWebSecurity:false,
    watchForFileChanges:false
  }
}) 