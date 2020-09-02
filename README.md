# adamos-hub-samples-sso-angular

This sample app demonstrates how to log in and log out using the ADAMOS HUB IAM Server.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Configuration

The sample needs to be configured with your client ID in order to work. In the environment file `src/environments/environment.ts` (`src/environments/environment.prod.ts` for production builds) set the client ID of your app in the placeholder `{{CLIENT_ID}}`.

In order to get a client ID your app has to be registered in the ADAMOS HUB IAM Server.

## Install dependencies

Run `npm install` or `yarn install` in order to install the needed dependencies.

## Run

Run `npm start` and open [http://localhost:4200](http://localhost:4200) in your browser. If everything is correctly setup you should be redirected to the login page of the ADAMOS IAM Server.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
