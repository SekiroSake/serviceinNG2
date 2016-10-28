# ServicePrac
# Font awesome in ng2 cli
- npm install font-awesome --save
- in the angular-cli.json file locate the styles[] array and addons[ ]array, and then add font-awesome references to them, like below:
```
"apps": [
          {
             "root": "src",
             "outDir": "dist",
             ....
             "styles": [
                "styles.css",
                "../node_modules/bootstrap/dist/css/bootstrap.css",
                "../node_modules/bootstrap/dist/css/bootstrap.css",
                "../node_modules/font-awesome/css/font-awesome.css" // -here webpack will automatically build a link css element out of this!?
             ],
             ...
         }
       ], 
"addons": [
    "../node_modules/font-awesome/fonts/*.+(otf|eot|svg|ttf|woff|woff2)" // - here
],
```

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
