import {Config} from "protractor";

exports.config = {
   
    directConnect : true, // We don't need to give command webdriver-manager start
    capabilities: {
      browserName: 'firefox'
    },

    specs: ['testSpec.js'],

    jasmineNodeOpts: {
      showColors: true,
    }
  };