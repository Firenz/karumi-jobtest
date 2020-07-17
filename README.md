# Programming test for [Karumi](https://www.karumi.com/) [![Build Status](https://travis-ci.com/Firenz/karumi-jobtest.svg?branch=master)](https://travis-ci.com/Firenz/karumi-jobtest)

This is a programming test for a Software Engineer position in [Karumi](https://www.karumi.com/).

**[Demo app live version](https://firenz.github.io/karumi-jobtest/)**

**[List of PRs](https://github.com/Firenz/karumi-jobtest/pulls?q=is%3Apr+is%3Aclosed)**

**[List of issues](https://github.com/Firenz/karumi-jobtest/issues?q=is%3Aissue+is%3Aclosed)**

**[Project kanban board](https://github.com/Firenz/karumi-jobtest/projects/1)**


## Description of the project
> The app contains a log in which the user can enter their email and password into the platform. 
>
> This login process will generate a session token which should be persisted into the application so the user doesn’t have to type the credentials when opening the app again and again.
>
> Once the user is logged in, a button to close the user session appears.

# How to use
- Download the project
- Install dependencies 
```
npm install
```
- And start the application. It will automatically open a tab with the app in your default browser. Also, you can open manually http://localhost:9000
```
npm start
```
## Deploy build
- To deploy a local development build
```
npm run build:dev
```
- To deploy a local production build
```
npm run build:prod
```
As a side note, a production build with this app is running in the [GitHub Pages of this repository](https://firenz.github.io/karumi-jobtest/).

## Run tests
- To run the tests of the project once
```
npm run test
```
- To make the test to run in a loop to watch your changes in code
```
npm run test:watch
```
- To run the tests coverage
```
npm run test:coverage
```
- To deploy a performance build made by Bundle Analyzer Plugin to see how much memory space occupies each package and more
```
npm run build:stats
```

# Requirements
- The project should be in a GitHub repository. ✅ 

- You should create a GitHub project with the template you prefer and design the tasks before starting to code. The tasks should be assigned to issues and those issues linked to the project you’ve created. Feel free to use any tag or other marker to indicate the different types of tasks you create. ✅ 

- Once you start working, every step in your project development should be added incrementally to the project using pull requests, and the evolution of the project should be reflected in the project you created before. ✅ 

- CI should be configured using GitHub actions or any other CI platform. The result of the CI execution should generate a bundle we can use to review the implemented application. ✅ 

- The project should use different tools to ensure the quality of the project from different viewpoints. ✅ 

- Code coverage is mandatory. ✅ 

- Documentation about how to use the project and what we are going to find in this repository would be part of the repository README file or the repository WiKi. Pay attention to this point, we will review it in detail. ✅ 

## Things that could have been done better
- [Codecov](https://codecov.io/) integration: Though being integrated with Travis CI, with every commit the informs [were always blank](https://docs.codecov.io/docs/error-reference#section-empty-reports), though locally running test coverage worked correctly. Seemed to be a problem with folders paths but I didn't know how to fix it. So in the end, I removed it to avoid code smell.

- Testing with React Routing: Being pretty new in testing and TDD, I still don't know how to mock useStats properly in React components. Also, I have a warning in history pushes while testing routing between components that I didn't know how to fix. These tests are still in the project, marked to be skipped, to showcase the tests.

- Authentication: I've never worked with authentication and persistence with Javascript & React. Ended up using [localStorage to do persistence](https://www.robinwieruch.de/local-storage-react) with a fake token session. A good way to have done this would have been: to mock the [auth token with JWT](https://jwt.io/) in the server and both server and app with a shared encrypted key to decipher the auth token.

# Development environment
- Language: Typescript
- Frameworks: React
- Tools: 
  - Environment: Node
  - Bundling: Webpack
  - Testing: Jest
  - CI: Travis CI
  - Transpilation: Babel
  - Linter: ES Lint
  - Code Formatter: Prettier
- IDE: Visual Studio Code
- Git IDEs: Visual Studio Code (integrated Git) & GitKraken
- OS: Ubuntu 20.04 LTS 64-bits
- Browser: Chrome v83 64-bits

# License
This project is licensed under the [MIT license](https://github.com/Firenz/karumi-jobtest/blob/master/LICENSE).

The logo brand used is part of the [Karumi](https://www.karumi.com/) brand.
