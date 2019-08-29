import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { injectIntl } from 'react-intl'
import Home from 'containers/Home'
import FormattedMessage from 'components/FormattedMessage'
import { messages } from './messages'

const App = () => (
  <>
    <h1>
      <FormattedMessage {...messages.welcome} />
    </h1>

    {/* {props.intl.formatMessage(messages.welcome)} */}
    <br />
    {/* {props.intl.formatMessage(messages.testouille)} */}
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </>
)

export default App
// export default injectIntl(App)
