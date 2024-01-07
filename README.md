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
    1. config
        - mapping
            - json files
        - host.json
        - pages.json
    2. - env
        - commonEnv
    3. - reports
        - video
        - screenshots for failure
    4. - src
            - step-definitions
                - assertions
                - setup
                    - hooks
                    - world
            - features
            - env
                - global
                - parseEnv
            - reporter
                - cucumber-reporter
            - support
                - navigation-behaviour
                - html-behaviour
                - wait-for-behaviour
                - web-element-helper
            - index.ts
    5. .babelrc
    6. cucumber.js
    7. run_tests.sh
    8. tsconfig.json
    9. package.json
    10. ReadMe file

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

8. To move the project from Yarn to npm
    - Replace "cucumber": "COMMON_CONFIG_FILE=env/common.env yarn cucumber-compile", with "cucumber": npm run transpile && cucumber.js in the package.json
    - And remove "cucumber-compile": "yarn transpile && cucumber-js", from package.json file
    - add COMMON_CONFIG_FILE=env/common.env into "run_test.sh" file as export COMMON_CONFIG_FILE=env/common.env then remove this from package.json whereever used
    - replace yarn run cucumber --profile $tag || yarn run postcucumber with npm run cucumber -- --profile $tag || npm run postcucumber in the "run_tests.sh" file
    - use rm -rf node-modules -  to remove the node-modules when you need to move from yarn to npm package manager
    - then use:
        - npm install
    