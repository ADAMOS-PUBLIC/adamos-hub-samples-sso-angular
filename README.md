# ADAMOS SSO with Angular

---
**IMPORTANT NOTE**

This application has the sole purpose of providing a functioning example to quickly demonstrate how single sign-on against the ADAMOS HUB IAM Service can be achieved. It simplifies things to the bare minimum and does neither intend nor claim to apply general best practices for building web applications.

---

## Prerequisites
- You have an **Angular CLI installation**
- You have an **ADAMOS STORE & ADAMOS HUB tenant** with a **valid user and password**. You receive these upon registering on the ADAMOS STORE & ADAMOS HUB
- Your company is registered as a **Seller** on the ADAMOS STORE
- You have an active application subscription with an according
    - **client ID** - which identifies the application on your ADAMOS STORE & ADAMOS HUB tenant
    - **URL** - which is whitelisted as redirect URL for your application

## ADAMOS Tenant

To obtain a tenant on the ADAMOS STORE & ADAMOS HUB, you need to register on the ADAMOS STORE & ADAMOS HUB. In order to become a Seller, you need to apply for a Seller upgrade from within your ADAMOS STORE & ADAMOS HUB Control Center. You will receive the client ID and the whitelisting of the redirect URL as soon as you register an application in the ADAMOS HUB and provision it for a subscriber.

## OAuth

We use the Authorization Code Flow with Proof Key for Code Exchange (PKCE). It is the currently recommended OAuth authentication and authorization flow since it provides additional security in particular for native apps and single page applications. That is why a client secret is not required in this tutorial. Should you use another flow type, you will also need the client secret in addition to the client ID.

## Development server

Run `ng serve` for a dev server. Navigate to `http://lvh.me:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

