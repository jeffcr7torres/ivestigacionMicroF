# KngWebBase

[![Build Status](https://cf1jks.favorita.ec/job/kng-web-base/job/feature%252FupdateToAngular10/)](https://cf1jks.favorita.ec/job/kng-web-base/job/feature%252FupdateToAngular10/)

[![Quality gate](https://cf1snr.favorita.ec/dashboard?id=kng-web-base#)](https://cf1snr.favorita.ec/dashboard?id=kng-web-base#)

[![Coverage](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=Coverage)](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=Coverage&view=list)

[![Technical deb](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=sqale_index)](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=sqale_index&view=list)

[![Vulnerabilities](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=vulnerabilities)](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=vulnerabilities&view=list)

[![Bugs](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=bugs)]https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=bugs&view=list)

[![Code Smells](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=code_smells)](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=code_smells&view=list)

[![ncloc](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=ncloc)](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=ncloc&view=list)

[![duplicated_lines_density](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=duplicated_lines_density)](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=duplicated_lines_density&view=list)

[![Security rating](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=security_rating)](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=security_rating&view=list)

[![Reliability rating](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=reliability_rating)](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=reliability_rating&view=list)

[![Sqale rating](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric==sqale_rating)](https://cf1snr.favorita.ec/component_measures?id=kng-web-base&metric=sqale_rating&view=list)

Base project for Angular 10 applications.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.2

## First steps
### 1. Important
```
Use Node v14.15.0
```

### 2. Clone
```
git clone https://user@bitbucket.org/corporacionfavorita/kng-web-base.git
```
### 3. Use angular 10 Branch
```
git checkout feature/updateToAngular10
```

### 4. Install dependencies
Locate at the root folder project and install dependencies
```
npm install
```

Note: repository registry is config in the `.npmrc` file of this projects. 

### 5. Run development server
```
npm start
```
The npm start script runs a development server with a proxy configuration from `proxy.conf.json` file.

Once the compilation is finished, the displayed url will be shown in console.
[http://localhost:9004/](http://localhost:9004/)


# Others instructions
## If use deprecated libraries
If use libraries that not optimized for Angular 10, add in the tsconfig.json
```
"angularCompilerOptions": {
    "enableIvy": false
  }
```
after "compilerOptions"

## Development server

Run `ng serve` for a dev server. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](https://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# KRUGER INSTRUCTIONS

## Build

Run `npm run build` for a build in --prod mode and change base-href.

## Build with custom configutation or enviroment

Run `ng build --configuration=pre` for a build with pre enviroment

## Generate war file

Run `npm run war` for create war file  before most be run  `npm run build`

## Build and generate war file

Run `npm run build:war` for a build in --prod mode and change base-href and generate war file

## Lint rules

Run `npm run lint` for a report lint rules.
