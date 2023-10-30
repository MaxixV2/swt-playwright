# DESCRIPTION
This is a project for functional testing of https://www.redmine.org website
##
### INSTALLATION:
1. Install the playwright framework: `npm install --save-dev playwright`
2. Install the Faker dependencies: `npm install @faker-js/faker --save-dev`

### USAGE:
Use `npx playwright test` to run tests specified in 'tests/...spec.js' files

Use `npx playwright show-report` to open last HTML report run

HTML report example:

![image](https://github.com/MaxixV2/swt-playwright/assets/99399536/29f4958e-7be4-4013-9231-82be6dfc63da)


## ALLURE REPORTER

### INSTALLATION:
1. Install the Allure dependencies: `npm i -D @playwright/test allure-playwright`
2. Install Allure command line: `npm install -g allure-commandline --save-dev`

### USAGE:
Use `allure generate allure-results -o allure-report --clean` to generate Allure report

Use `allure open allure-report` to open Allure report

Allure report example: 

![image](https://github.com/MaxixV2/swt-playwright/assets/99399536/0ca075f9-bcf1-4772-bbbd-a0857bd1aebd)
