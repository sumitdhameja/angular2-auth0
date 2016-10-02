# Based on Angular QuickStart Source
Simple auth0 authentication using Angular 2 and bootstrap


This repository holds the TypeScript source code of the [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html),
the foundation for most of the documentation samples and potentially a good starting point for your application.

It's been extended with testing support so you can start writing tests immediately.

**This is not the perfect arrangement for your application. It is not designed for production.
It exists primarily to get you started quickly with learning and prototyping in Angular**

We are unlikely to accept suggestions about how to grow this QuickStart into something it is not.
Please keep that in mind before posting issues and PRs.

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.



### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server)

with excellent support for Angular apps that use routing.
* `npm run typings` - runs the typings tool.
* `npm run postinstall` - called by *npm* automatically *after* it successfully completes package installation. This script installs the TypeScript definition files this app requires.
Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)


