import React from 'react'
import { compose } from 'redux'
import injectSaga from 'utils/injectSaga'
import { BrowserRouter as Router } from 'react-router-dom'
// import { injectIntl } from 'react-intl'
import FormattedMessage from 'components/FormattedMessage'
import Routes from 'containers/Routes'
import { messages } from './messages'
import ScrollToTop from './ScrollToTop'
import saga from './saga'

const App = () => (
  <>
    <h1>
      <FormattedMessage {...messages.welcome} />
    </h1>

    {/* {props.intl.formatMessage(messages.welcome)} */}
    <br />
    {/* {props.intl.formatMessage(messages.testouille)} */}
    <Router>
      <ScrollToTop>
        <Routes />
      </ScrollToTop>
    </Router>
  </>
)
const withSaga = injectSaga({ key: 'AppPage', saga })

export default compose(withSaga)(App)
// export default injectIntl(App)
