# QUIDAX QA ASSESSMENT

## Overview
This repository contains automated test scripts using Cypress. The tests cover various scenarios to validate the behavior of select lists, including selecting/deselecting options, retrieving selected options, and verifying dropdown selections.

## Folder Structure
The cypress project is structured as follows:
```
qdx/
└── cypress/
    ├── e2e/
    │   ├── features/
    │   │   ├── multi_select.feature
    │   │   └── single_select.feature
    │   ├── support/
    │   │   ├── page_objects/
    │   │   │   ├── SelectListPage.js
    │   │   │   └── index.js
    │   │   ├── step_definitions/
    │   │   │   ├── multi_select_steps.js
    │   │   │   └── single_select_steps.js
    │   │   └── utils/
    │ 
    └── ...

```
- **features/**: Contains Gherkin feature files defining test scenarios.
- **support/**:
  - **page_objects/**: Encapsulates page-specific methods and locators.
  - **step_definitions/**: Maps Gherkin steps to corresponding JavaScript functions.
  - **utils/**: Utility functions or helpers used across the test suite.

## Installation
To run the automated tests, ensure you have Node.js (which includes npm) installed.

1. Clone the repository:
   ```bash
   git clone <https://github.com/Bammy00/Qdx.git>
   cd <qdx>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests
You can run the tests in headless mode (CLI) or using the Cypress Test Runner.

### Headless Mode (CLI)
To run all tests in headless mode and generate reports:

```bash
npm run test:cli
```

### Cypress Test Runner
To open Cypress Test Runner and run tests interactively:

```bash
npm run test:open
```

## Reporting
Cypress generates detailed reports automatically after each test run, including screenshots and videos for failed tests.

## Dependencies
- Cypress: JavaScript End to End Testing Framework.
- Cucumber Preprocessor: Allows writing tests in Gherkin syntax.