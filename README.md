
# Boilerplate React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> prévoir de la doc par lib, des branches en fonction de la complexité du projet. (redux vs context/ saga ou non / etc...) ou un tuto d'installation de la lib.

Before all git commit we have a **pre-commit** lint:staged. 
  
# Available Scripts

### `npm start`
>  **REACT_APP_ENV_TYPE = development**

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run start:mock`
Run the internal mock server create in nodeJS with Express. Check mock section for more informations

### `npm run start:all`
Run **`npm start`** & **`npm run start:mock`** in same time.

### `npm run test:watch`
Run Jest in watch mode

### `npm run cypress`
Run cypress. 

### `npm run start:preprod`
>  **REACT_APP_ENV_TYPE = preprod**

Runs the app in the pre production mode.

### `npm run start:prod`
>  **REACT_APP_ENV_TYPE = production**

Runs the app in the production mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Mock


# Testing 
We use : 
- [Jest](https://jestjs.io/)
- [Chai](https://www.chaijs.com/) 
- [Enzyme](https://airbnb.io/enzyme/)
- [Cypress](https://www.cypress.io/)

# Libraries

## React

To learn React, check out the [React documentation](https://reactjs.org/).

## Redux


  

# TODO



[ ] Saga (?? en branch peut être en fonction du projet


[ ] Traduction (i18n? intl ? ...)