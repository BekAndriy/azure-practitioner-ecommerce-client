# React-shop-cloudfront

This is frontend starter project for nodejs-aws mentoring program. It uses the following technologies:

- [Vite](https://vitejs.dev/) as a project bundler
- [React](https://beta.reactjs.org/) as a frontend framework
- [React-router-dom](https://reactrouterdotcom.fly.dev/) as a routing library
- [MUI](https://mui.com/) as a UI framework
- [React-query](https://react-query-v3.tanstack.com/) as a data fetching library
- [Formik](https://formik.org/) as a form library
- [Yup](https://github.com/jquense/yup) as a validation schema
- [Serverless](https://serverless.com/) as a serverless framework
- [Vitest](https://vitest.dev/) as a test runner
- [MSW](https://mswjs.io/) as an API mocking library
- [Eslint](https://eslint.org/) as a code linting tool
- [Prettier](https://prettier.io/) as a code formatting tool
- [TypeScript](https://www.typescriptlang.org/) as a type checking tool

## FE URL

https://azurecloudfrontfe0016.z16.web.core.windows.net/

## Available Scripts

### `start`

Starts the project in dev mode with mocked API on local environment.

### `build`

Builds the project for production in `dist` folder.

### `preview`

Starts the project in production mode on local environment.

### `test`, `test:ui`, `test:coverage`

Runs tests in console, in browser or with coverage.

### `lint`, `prettier`

Runs linting and formatting for all files in `src` folder.

### `client:deploy`

Deploy the project build from `dist` folder to configured in `terraform` Account Storage. Storage account should be configured in advance and added to the command.

### `client:build:deploy`

Combination of `build` and `client:deploy` commands with or without confirmation.

## Commands to create Azure env by Terraform

`` ! Note commands should be executed from the `terraform` folder ``

```
!Notes:
  - commands should be executed from the `terraform` folder
  - before execution change name of the store in `terraform/main.tf`
```

### `terraform init`

Init Terraform folders and providers

### `terraform plan`

Review what should be created

### `terraform apply`

Setup everything on the Azure
