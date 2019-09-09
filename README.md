
# Boilerplate React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

> prévoir de la doc par lib, des branches en fonction de la complexité du projet. (redux vs context/ saga ou non / etc...) ou un tuto d'installation de la lib.

Before all git commit we have a **pre-commit** lint:staged. 

# Menu
- [Available Scripts](#available-scripts)
- [Mock](#mock)
-- [Data base](#database)
-- [Routing](#routes)
- [Testing](#testing)
- [Internationalization](#internationalization)
-- [How to add languages](#how-to-add-languages)
-- [Define messages](#define-messages)
- [Libraries](#libraries)
-- [React](#react)
-- [Redux](#redux)
- [Good Practice](#good-practice)
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

### `npm run start:i18n`
Extract all defined messages and create js lang file 

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
This homemade mock server is here to save the back team ass ! It's a simple [Express](https://expressjs.com/fr/guide/routing.html) server with a json for DB. You can do anything GET/PUT/POST/DELETE....

To use it, `npm run start:mock` ou `npm run start:all`. By default open [http://localhost:3004/db](http://localhost:3004/db) to view it in the browser.

#### DataBase 
open `/src/utils/mock/db.js` to see all db values. It's a simple Json file
#### Routes 
open `/src/utils/mock/server.js` to see all routes. 
> **GET simple exemple**  :
~~~~ 
server.get('/me', (req, res) => {
	const  users  =  db.get('users').value()
	res.json(users)
}) 
~~~~
  
> **GET with param exemple**  :
~~~~ 
server.get('/examples/:id', (req, res) => {
	const  id = req.params.id
	const  data = db
		.get('examples')
		.find({ id })
		.value()

	res.json(data)
}) 
~~~~

> **POST exemple**  :
~~~~ 
server.post('/user', bodyParser, (req, res) => {
	const {email, password} =  req.body  || {}
	let  users  = {}
	if(email  &&  email === 'test@test.test'){
		users = {
			"status":  "400 XXXxxxxx",
			"error":  "authentication failed"
		}	
		res.status(400).json(users)
	}else{
		users  = {
			"status": ["success"],
			"token":  "MzeeHwDvP6EUsssSztu5167nNNKPdZFmvvFDP437qWa1R1jkx25uYh7HXs0tr3f1"
		}
		res.json(users)
	}
})
~~~~

# Testing 
We use : 
- [Jest](https://jestjs.io/)
- [Chai](https://www.chaijs.com/) 
- [Enzyme](https://airbnb.io/enzyme/)
- [Cypress](https://www.cypress.io/)

# Internationalization
To manage trads, we use [react-intl](https://github.com/formatjs/react-intl). 
Run the script `npm run start:i18n` to generate json files each time you add or update texts
### How to add languages :
you have to update `./translationRunner.js` and update this : 
~~~~
manageTranslations({
	messagesDirectory:  '.messages',
	translationsDirectory:  'src/translations/l18n/',
	// en is defaultLocale so no need to list en here
	languages: ['fr'], <--- add code here
})
~~~~
This script will create all json file by country. These files need to be translate and imported here `src/translations/i18n-locales.js` 

### Define messages :
First you have to define messages in the composant or in a separate file.
~~~~
import { defineMessages } from  'react-intl.macro'

export  const  messages  =  defineMessages({
	welcome: {
		id:  'Component.welcome',
		defaultMessage:  'Welcome to React',
		description:  'title',
	},
})
~~~~
To display it, 2 ways : 
**FormattedMessage** :  
here with use a component to fix this [issue](https://github.com/formatjs/babel-plugin-react-intl/issues/119)
~~~~
import  FormattedMessage  from  'components/FormattedMessage'
import { messages } from  './messages'

<h1>
	<FormattedMessage  {...messages.welcome}  />
</h1>
~~~~
**injectIntl** :
~~~~
import { injectIntl } from 'react-intl'
import { messages } from  './messages'

const  App  = (props) => (
	<h1>
		{props.intl.formatMessage(messages.welcome)}
	</h1>
)

export default injectIntl(App)
~~~~

# Libraries

## React

To learn React, check out the [React documentation](https://reactjs.org/). 

## Redux


# Good Practices

These are some of the good practices we tend to follow and some recommandation to go with it

## Index as key is an anti-pattern
When you first start to use react, you'll quickly start to map over an array to generate some components from your state. React will issue a warning stating that each component in the list should have a unique identifier. The easy (and wrong) solution is to use the `index` of your map function to give an id to each key. You can find a post [here](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318) explaining all of this in greater details.

We chose a simple solution, this boilerplate include a small utility called `shortid`. When you map over an array that doesn't have unique ids that could be used as key. Simply import the library and generate a random id like so : 

```
import shortid from 'shortid'

// Your component code…

render(){
	return(
		<div>{array.map(a => <MyComponent key={shortid.generate()} />)}</div>
	)
}

```

# TODO



[ ] Saga (?? en branch peut être en fonction du projet


[ ] Traduction (i18n? intl ? ...)

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md]() |
| GitHub | [plugins/github/README.md]() |