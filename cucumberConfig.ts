import {Config} from "protractor";
import * as reporter from "cucumber-html-reporter";

exports.config = {
   
    directConnect : true, // We don't need to give command webdriver-manager start
    framework: 'custom', // set to "custom" instead of cucumber.
    frameworkPath: require.resolve('protractor-cucumber-framework'), // path relative to the current config file
  
  
    capabilities: {
      browserName: 'firefox'
    },

    specs: ['../features/demo.feature'],

    cucumberOpts: {
        // require step definitions
        //tags:["@AngularTesting"] ,
        format:'json:./cucumberReport.Json' ,  // For screenshorts
        require: [
          './stepDefinations/*.js'
        ]
      },
     
      onComplete: () =>{
        var options = {
          theme: 'bootstrap',
          jsonFile: './cucumberReport.json',
          output: './cucumberReport.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
              "App Version":"0.3.2",
              "Test Environment": "STAGING",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };
   
      reporter.generate(options);
    },

    jasmineNodeOpts: {
      showColors: true,
    }
  };