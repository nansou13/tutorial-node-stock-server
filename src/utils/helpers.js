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

export const closestToZero = (values) => {
  if (!values) return 0
  return (
    values.reduce((closest, current) => {
      if (!closest) return parseInt(current, 2)
      if (current !== null) {
        if (current >= 0 && current <= Math.abs(closest)) return current
        if (current < 0 && Math.abs(current) < Math.abs(closest)) return current
      }
      return closest
    }, null) || 0
  )
}

export const removeLocalStorage = () => {
  localStorage.removeItem('access_token')
}
