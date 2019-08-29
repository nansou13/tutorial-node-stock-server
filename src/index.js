import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { IntlProvider } from 'react-intl'
import translations from 'translations/i18n-locales'
import configs from 'config'

import App from 'containers/App'
import configureStore from './configureStore'

import './index.css'
import * as serviceWorker from './serviceWorker'

const initialState = {}
const store = configureStore(initialState)
const MOUNT_NODE = document.getElementById('root')

const localeValue = 'fr' // configs.defaultLocal

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider
      locale={localeValue}
      defaultLocale={configs.defaultLocal}
      key={localeValue}
      messages={translations[localeValue]}
    >
      <App />
    </IntlProvider>
  </Provider>,
  MOUNT_NODE
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
