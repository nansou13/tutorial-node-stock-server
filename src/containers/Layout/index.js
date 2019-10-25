import React from 'react'
import PropTypes from 'prop-types'
export const DefaultLayout = ({ children }) => (
  <>
    {/* début du template */}
    {children}
    {/* fin du template */}
  </>
)

DefaultLayout.propTypes = {
  children: PropTypes.any.isRequired,
}

export const AlternateLayout = ({ children }) => (
  <>
    {/* début du template */}
    {children}
    {/* fin du template */}
  </>
)

AlternateLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
