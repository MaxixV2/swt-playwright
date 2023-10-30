# DESCRIPTION
This is a project for functional testing of https://www.redmine.org website
## REQUIREMENTS:

 - Node.js >= v18.17.1

### INSTALLATION:
```
npm install
```
### USAGE:
To run tests specified in spec.js files use:
```
npx playwright test
```

Use `npx playwrite test filename.spec.js` to run a specific test

For example:

    npx playwright test login-hf.spec.js

To run tests in headed mode use flag `--headed` 

    npx playwright test --headed

To open last HTML report run use:
```
npx playwright show-report`
```
HTML report example:

![image](https://github.com/MaxixV2/swt-playwright/assets/99399536/29f4958e-7be4-4013-9231-82be6dfc63da)


## ALLURE REPORTER

### INSTALLATION:
1. Install the Allure dependencies:
```
npm i -D @playwright/test allure-playwright
```
2. Install Allure command line:
```
npm install -g allure-commandline --save-dev
```
### USAGE:

To generate Allure report use:
```
allure generate allure-results -o allure-report --clean 
```
To open Allure report use:
```
allure open allure-report
```
Allure report example: 

![image](https://github.com/MaxixV2/swt-playwright/assets/99399536/0ca075f9-bcf1-4772-bbbd-a0857bd1aebd)
