
# React Webpack starter

[![Build Status](https://travis-ci.org/samouss/react-webpack-starter.svg?branch=master)](https://travis-ci.org/samouss/react-webpack-starter) [![dependencies Status](https://david-dm.org/samouss/react-webpack-starter/status.svg)](https://david-dm.org/samouss/react-webpack-starter) [![devDependencies Status](https://david-dm.org/samouss/react-webpack-starter/dev-status.svg)](https://david-dm.org/samouss/react-webpack-starter?type=dev)

React starter build with Webpack 3, Babel, CSS Modules, ESLint, Jest, Enzyme.

## Clone

Run this command for launch a new project from the starter.

```
// Run this command first for clone the repository
git clone git@github.com:samouss/react-webpack-starter.git [PROJECT_NAME]

// Then execute this one for remove .git information and start a new project
rm -rf [PROJECT_NAME]/.git
```

## Installation

Clone the repository and then run the following command:

```
yarn install
```

## Run the application

For build the dev application and launch a server in watch mode on `localhost:8080`:

```
yarn start
```

## Bundle the application

For build your application for production:

```
yarn build
```

## Run the test for your application

Your tests will be executed in single run mode:

```
yarn test
```

For run in watch mode:

```
yarn test:watch
```
