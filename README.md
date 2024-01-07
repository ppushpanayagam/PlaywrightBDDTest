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
    
3. tsconfig.json updates
    1. "noImplicitAny": false, to disable error that can be showed up when we use tools that are not integrated with TypeScript completely, example Cucumber.

4. Folder Structure:
    1. - src
            - assertions
            - hooks
            - step-definitions
            - features
            