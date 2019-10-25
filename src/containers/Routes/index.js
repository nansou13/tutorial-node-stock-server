import React from 'react'
import { PublicRoute, PrivateRoute } from 'containers/Routes/LayoutRoutes'
import { Redirect, Switch } from 'react-router-dom'

// Boutique
import Home from 'containers/Home'
import Page404 from 'containers/Contents/404'

const Routes = () => (
  <Switch>
    {/* <Route
      exact
      path="/thank-you/:id?"
      render={({ match }) => <Redirect to={`/boutique/thank-you/${match.params.id}`} />}
    /> */}
    {/* Public Routes */}
    <PublicRoute exact path="/" component={Home} />
    <PublicRoute path="/404" component={Page404} />
    {/* PrivateRoutes */}
    <PrivateRoute path="/homeconnected" component={Home} />

    {/* Catch all */}
    <Redirect from="*" to="/404" />
  </Switch>
)

export default Routes
