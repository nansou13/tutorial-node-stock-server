import { css } from 'styled-components/macro'

const sizes = {
  xl: 1162,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 374,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})
