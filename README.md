# Getting Started with Crisp Front End Take Home Test

## Prerequisites 

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

1. you will require node runtime, install one
    > On Mac: 
    > See `.nvmrc` for node version. You could use https://brew.sh/, install node via `brew install node@18` or `brew install nvm` && `nvm install v18.16.0` && `nvm use`
2. this project runs on yarn
    > On Mac: Install it via `brew install yarn`.
3. install all the dependencies
    > run `yarn`
4. now you can run the project
    > run `yarn start`

## Running Project

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Architectural Overview


## List of assumptions / simplifications

- i did not add scrolling at this time to states columns data
- did not center states group label
- no column resizing by user mouse manipulation
- no collapse/expand of group of category rows
- simplified shadows that appear on screenshot to be dark borders
- added minimal suite of unit tests
- did not add any e2e tests
- I did not consider responsive aspects

## TODO
> List of the next steps I would want to do if this was a real project

- [ ] As per design, I would incorporate scrolling through state data, horizontally and vertically
- [ ] As per design, Once scrolling is implemented, I would incorporate sticky table header and sticky left column for category/sub-category.
- [ ] Dependency import aliases, for example, when importing i18n util, not to manually traverse directory path
- [ ] Replace border with shadow to separation products/states
- [ ] Implement collapse/expand of group of category rows
- [ ] Add responsive support to manage size and layout breakpoints for smaller/larger viewports
- [ ] Expand suite of unit tests
- [ ] Add suite of e2e tests
- [ ] Add data mapping configuration, so you can build table out based on config.
- [ ] Convert data fetching to async calls / api calls
- [ ] Address FIXME: / TODO: items
  - #1 - /crisp-front-end-take-home-test/src/services/index.ts#40
    > FIXME: casted row as any to temporary fix ts(7053)
  - #2 - /crisp-front-end-take-home-test/src/types/index.ts#44
    > FIXME: add proper typings, bad juju


