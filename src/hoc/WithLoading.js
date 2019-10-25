import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { LoaderElement } from 'components/Loader'

export const SCLoading = styled('div')`
  position: relative;
`

function WithLoading(Component) {
  function WithLoadingComponent({ isLoading, forced = false, ...props }) {
    return (
      <SCLoading>
        {isLoading && <LoaderElement />}
        {forced && !isLoading && <Component {...props} />}
        {!forced && <Component {...props} />}
      </SCLoading>
    )
  }
  WithLoadingComponent.propTypes = {
    isLoading: PropTypes.bool,
    forced: PropTypes.bool,
  }

  return WithLoadingComponent
}

export default WithLoading

// How to use it
// const ProductVariantWithLoading = WithLoading((props) => <ProductVariants {...props} />)
// <ProductVariantWithLoading {...this.props} isLoading={!product} forced />
// OR directly export default ProductVariantWithLoading
