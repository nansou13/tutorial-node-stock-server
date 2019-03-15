import { Main } from 'components/Layout'
import React from 'react'
import PropTypes from 'prop-types'
import Responsive from 'components/Responsive'

const Home = (props) => (
  <Main>
    <Responsive minWidth="714px">{`Hello min 714px ${props.name || ''}`}</Responsive>
    <Responsive maxWidth="713px">{`Hello max 713px ${props.name || ''}`}</Responsive>
  </Main>
)

Home.propTypes = {
  name: PropTypes.string,
}

export default Home
