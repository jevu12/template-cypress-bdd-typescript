# Template of cypress
![img.png](cypress%2Ffixtures%2Fimg.png)
###
**Cypress 10+ which cucumber, typescript, esbuild and multiple-cucumber-html-reporter boilerplate proyect**
## Proyect structure
```bash
├── cypress
│   ├── config
│   │   ├── url
│   │   │   └── url.ts
│   │   └── user.ts
│   ├── e2e
│   │   ├── features
│   │   │   ├── example.feature
│   ├──fixtures
│   ├── support
│   │   ├── commands.ts
│   │   ├── e2e.ts
│   │   ├── pageObjects
│   │   │   └── example.ts
│   │   └── step_definitions
│   │       └── example.ts
package.json
cypress.config.js
cucumber-html-report.js
cypress.env.json
PULL_REQUEST_TEMPLATE.md
README.md
tsconfig.json
```

## 💻 Topics
Integrating Cypress with:

- [x] https://github.com/badeball/cypress-cucumber-preprocessor
- [x] https://github.com/bahmutov/cypress-esbuild-preprocessor
- [x] https://www.npmjs.com/package/multiple-cucumber-html-reporter

## 💻 Pre-requisites
- [x] Node.js
- [x] NPM
 
## 🚀 Install the project
```bash
npm install
```
## Run the demo:
```bash
npm cy:open
```
or
```bash
npm cy:run
```