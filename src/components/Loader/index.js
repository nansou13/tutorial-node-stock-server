import React from 'react'
import PropTypes from 'prop-types'
import { SCLoader, SCLoaderElement, SCCircles, SCCircle, SCText } from './styles'

const Loader = ({ timing }) => (
  <SCLoader>
    <SCCircles timing={timing}>
      <SCCircle />
      <SCCircle />
      <SCCircle />
      <SCCircle />
      <SCCircle />
    </SCCircles>
    <SCText>Chargement</SCText>
  </SCLoader>
)

export default Loader

Loader.propTypes = {
  timing: PropTypes.number,
}

export const LoaderElement = ({ timing }) => (
  <SCLoaderElement>
    <SCCircles timing={timing}>
      <SCCircle />
      <SCCircle />
      <SCCircle />
      <SCCircle />
      <SCCircle />
    </SCCircles>
    <SCText>Chargement</SCText>
  </SCLoaderElement>
)

LoaderElement.propTypes = {
  timing: PropTypes.number,
}
