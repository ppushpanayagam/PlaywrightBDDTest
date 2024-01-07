# PlaywrightBDDTest


1. Pre-requisites for this Framework:
    1. VS Code / IntelliJ IDEA / Eclipse / Sublime
    2. Yarn /  npm
2. Installation
    1. npm init -y
    2. npx  -p typescript tsc --init
    3. yarn add playwright -D
    4. yarn add @playwright/test -D
    5. yarn add @cucumber/cucumber -D
    6. yarn add typescript -D
    7. yarn add ts-node -D
    8. yarn add cucumber-html-reporter
    9. yarn add @babel/cli -D
    10. yarn add @babel/preset-env -D
    11. yarn add dotenv -D
    
3. tsconfig.json updates
    1. "noImplicitAny": false, to disable error that can be showed up when we use tools that are not integrated with TypeScript completely, example Cucumber.
    2. "target": "es6"

4. Folder Structure:
    1. - env
    2. - reports
    3. - src
            - step-definitions
                - assertions
                - setup
                    - hooks
                    - world
            - features
            - env
            - reporter
            - index.ts
    4. .babelrc
    5. cucumber.js
    6. run_tests.sh
    7. tsconfig.json
    8. package.json
    9. ReadMe file

5. To link Cucumber features and Steps:
    1. Install the gherkin full support plugin within VSCODE
    2. Add .vscode/settings.json file in root folder of react-app
        - Click  the VS code / preferences / settings link
        {     
            "cucumberautocomplete.steps": ["./src/step-definitions/**/*.ts"],     
            "cucumberautocomplete.syncfeatures": "./src/features/*.feature", 
        }

6. Regex to link parameter from features "([^"]*)" -> this will expect / restrict "any text" or use "(.*)" instead to handle    "any "text" message"

7. Script can be added like below in the package.json file
    "scripts": {
        "cucumber:dev" : "cucumber-js src/features/**/*.feature --tags @dev --require-module ts-node/register --require src/step-definitions/**/**/*.ts",
        "cucumber:smoke" : "cucumber-js src/features/**/*.feature --tags @smoke --require-module ts-node/register --require src/step-definitions/**/**/*.ts",
        "cucumber:regression" : "cucumber-js src/features/**/*.feature --tags @regression --require-module ts-node/register --require src/step-definitions/**/**/*.ts"
    }

8. 