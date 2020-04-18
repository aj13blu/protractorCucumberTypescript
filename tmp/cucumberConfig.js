"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = require("cucumber-html-reporter");
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'firefox'
    },
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        // require step definitions
        //tags:["@AngularTesting"] ,
        format: 'json:./cucumberReport.Json',
        require: [
            './stepDefinations/*.js'
        ]
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberReport.json',
            output: './cucumberReport.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1EQUFtRDtBQUVuRCxPQUFPLENBQUMsTUFBTSxHQUFHO0lBRWIsYUFBYSxFQUFHLElBQUk7SUFDcEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFHL0QsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFNBQVM7S0FDdkI7SUFFRCxLQUFLLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztJQUVuQyxZQUFZLEVBQUU7UUFDViwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLE1BQU0sRUFBQyw0QkFBNEI7UUFDbkMsT0FBTyxFQUFFO1lBQ1Asd0JBQXdCO1NBQ3pCO0tBQ0Y7SUFFRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2YsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLE1BQU0sRUFBRSx1QkFBdUI7WUFDL0Isc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDSixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZUFBZSxFQUFFO1FBQ2YsVUFBVSxFQUFFLElBQUk7S0FDakI7Q0FDRixDQUFDIn0=