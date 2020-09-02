# ADAMOS HUB Single Sign-On (SSO) with Angular

This sample app demonstrates how to log in and out using the ADAMOS HUB IAM Server. It uses the [angular-oauth2-oidc](https://github.com/manfredsteyer/angular-oauth2-oidc) library to handle the Authorization Code flow with PKCE newly defined with [OAuth 2.1](https://oauth.net/2.1/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Prerequisites

To run through this tutorial, you need to fulfill the following prerequisites:

- You have a tenant on the ADAMOS HUB with a
	- **valid user and password** - You receive these upon registering on the ADAMOS HUB
- Your company is registered as a Seller on the ADAMOS HUB
- You have an active application subscription with an according
	- **client ID** - which identifies the application on your ADAMOS HUB tenant
	- **URL** - which is whitelisted as redirect URL for your application

> Note: To obtain a tenant on the ADAMOS HUB, you need to <a href="/users/documentation/registration" target="_blank">register on the ADAMOS HUB</a>. In order to become a Seller, you need to <a href="users/documentation/seller-center" target="_blank">apply for a Seller upgrade</a> from within your ADAMOS HUB Control Center. You will receive the client ID and the whitelisting of the redirect URL as soon as you register an application in the ADAMOS HUB and provision it for a subscriber. You can still walk through this tutorial without this information, however, in order to launch the app from ADAMOS HUB myApps you will need the before mentioned information and update your app with it.

## Configuration

The sample needs to be configured with your client ID in order to work. In the environment file `src/environments/environment.ts` (for production builds use `src/environments/environment.prod.ts`) set the client ID of your app in the placeholder `{{CLIENT_ID}}`.

## Install dependencies

Run `npm install` or `yarn install` in order to install the needed dependencies.

## Run

Run `npm start` or `yarn start` and open [http://localhost:4200](http://localhost:4200) in your browser. If everything is correctly setup you should be redirected to the login page of the ADAMOS HUB IAM Server.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
