import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { DefaultLayout, AlternateLayout } from 'containers/Layout'

export const PublicRoute = ({ component: Component, layout = 'default', ...rest }) => (
  <Route
    {...{ ...rest }}
    render={(matchProps) =>
      layout === 'default' ? (
        <DefaultLayout>
          <Component {...matchProps} />
        </DefaultLayout>
      ) : (
        <AlternateLayout>
          <Component {...matchProps} />
        </AlternateLayout>
      )
    }
  />
)
PublicRoute.propTypes = {
  component: PropTypes.func,
  layout: PropTypes.string,
}

const PrivateRouteProtected = ({
  component: Component,
  layout = 'default',
  isUserConnected,
  location,
  ...rest
}) => {
  if (isUserConnected === null) return null
  if (isUserConnected === false)
    return (
      <Redirect
        to={{
          pathname: '/connexion',
          state: { from: location },
        }}
      />
    )
  return (
    <Route
      {...rest}
      render={(matchProps) =>
        layout === 'default' ? (
          <DefaultLayout>
            <Component {...matchProps} />
          </DefaultLayout>
        ) : (
          <AlternateLayout>
            <Component {...matchProps} />
          </AlternateLayout>
        )
      }
    />
  )
}
PrivateRouteProtected.propTypes = {
  component: PropTypes.func,
  layout: PropTypes.string,
  isUserConnected: PropTypes.bool,
  location: PropTypes.object,
}

const mapStateToProps = (state) => ({
  isUserConnected: state.user.isUserConnected,
})

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteProtected)

PrivateRoute.propTypes = {
  isUserConnected: PropTypes.bool,
}
