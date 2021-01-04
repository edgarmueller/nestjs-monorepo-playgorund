# Library B 

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

## Things to-do first

1. Search for `lib-example` and replace it with the name of your component. 
2. Go to the `package.json`
   1. add your name to the list of `contributors`
   2. edit `description` write a short term about your lib
3. Delete this list and the headline `Things to-do first` and write a nice readme about how to use the lib.

## semantic-version and commitlint

This repository use [commitlint](https://commitlint.js.org/) your commits need to look like `feat: TOOL-67 init template` with this convention the push to master creates a new version based on your commits.

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
