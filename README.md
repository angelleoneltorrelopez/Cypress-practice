# Requirement
- [Nodejs] 14.17.4
- NPM 6.14.14

Optional
- Browser Chrome

[Nodejs]: https://nodejs.org/en/

## Dependencies used
| Name                           | Version |
| ------------------------------ | ------- |
| [cypress]                      |  8.7.0  |
| [mochawesome]                  |  7.0.1  |
| [mochawesome-merge]            |  4.2.0  |
| [mochawesome-report-generator] |  6.0.1  |

[cypress]: https://github.com/cypress-io/cypress
[mochawesome]: https://github.com/adamgruber/mochawesome
[mochawesome-merge]: https://github.com/Antontelesh/mochawesome-merge
[mochawesome-report-generator]: https://github.com/adamgruber/mochawesome-report-generator

# Install dependencies
```bash
npm install
```

# Commands
## Open cypress
```bash
npm run open
```

## Run all tests on the console
```bash
npm run test
```

## Run a specific test
- Run api tests.
```bash
npm run test:api
``` 
- Run tests on the "formulario" page.
```bash
npm run test:home
``` 

## Generate report
Run after "npm run test"
```bash
npm run report
```

## Delete reports
```bash
npm run delete:reports
```

## Cypress
Cypress Documentation
https://docs.cypress.io/

### Structure
* **cypress**
    * **Fixtures:** Folder where the files to be used in the mocks, they can be images, videos, txt, json, etc.
    * **Integration:** This is where we keep our e2e tests.
    * **Plugins:** In this folder we can modify the internal functioning of Cypress.
    * **screenshots:** When tests are run through the terminal and a test fails, a screenshot is taken and added to this folder.
    * **Support:** A place where we can store utility functions, for example a function that handles authentication.
    * **Videos:** When the tests are run through the terminal, a video of the run is created and added to this folder.
* **mochawesome-report:** Folder where the reports are generated.
* **cypress.json** Cypress configuration file.