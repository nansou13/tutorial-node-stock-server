import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components/macro'

export const SCResponsive = styled('div')`
  display: none;

  ${(props) =>
    props.minWidth &&
    css`
      @media (min-width: ${props.minWidth}) {
        display: block;
      }
    `}

  ${(props) =>
    props.maxWidth &&
    css`
      @media (max-width: ${props.maxWidth}) {
        display: block;
      }
    `}
`

const Responsive = (props) => <SCResponsive {...props}>{props.children}</SCResponsive>

Responsive.propTypes = {
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  children: PropTypes.any,
}

export default Responsive
