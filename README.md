# ADAMOS HUB Single Sign-On (SSO) with Angular

This sample app demonstrates how to log in and log out using the ADAMOS HUB IAM Server. It uses the [angular-oauth2-oidc](https://github.com/manfredsteyer/angular-oauth2-oidc) library to handle the Authorization Code flow with PKCE newly defined with [OAuth 2.1](https://oauth.net/2.1/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Configuration

The sample needs to be configured with your client ID in order to work. In the environment file `src/environments/environment.ts` (for production builds use `src/environments/environment.prod.ts`) set the client ID of your app in the placeholder `{{CLIENT_ID}}`.

In order to get a client ID your app has to be registered with your tenant in the ADAMOS HUB IAM Server.

## Install dependencies

Run `npm install` or `yarn install` in order to install the needed dependencies.

## Run

Run `npm start` or `yarn start` and open [http://localhost:4200](http://localhost:4200) in your browser. If everything is correctly setup you should be redirected to the login page of the ADAMOS HUB IAM Server.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
