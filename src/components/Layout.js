import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { media } from 'utils/helpers'

export const SCWrap = styled('div')`
  width: 100%;
  max-width: 1161px;
  margin: 0 auto;

  ${media.xl`
    padding: 0 1em;
  `}
`

export const SCMain = styled('div')`
  margin: 28px auto;

  ${SCWrap} {
    display: flex;
    align-items: flex-start;

    ${media.sm`
      display: block;
    `}
  }
`

export const Main = ({ children }) => (
  <SCMain>
    <SCWrap>{children}</SCWrap>
  </SCMain>
)

Main.propTypes = {
  children: PropTypes.any,
}

export const SCFlex = styled('div')`
  display: flex;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'flex-start')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};

  ${media.sm`
    flex-direction: ${(props) => (props.mobileColumn ? 'column' : 'row')};
  `}
`

export const SCFlexIconText = styled('div')`
  display: flex;
  align-items: center;

  svg {
    margin-right: ${(props) => (props.inversed ? 'inherit' : '1em')};
    margin-left: ${(props) => (props.inversed ? '1em' : 'inherit')};
  }
`

export const SCGrid = styled('div')`
  display: grid;
  grid-template-columns: ${(props) => (props.template ? props.template : '1fr')};
  grid-gap: ${(props) => (props.gap ? props.gap : '10px')};
`
