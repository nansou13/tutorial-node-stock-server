import { Main } from 'components/Layout'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { appLoad } from 'actions/global.action'
import api from 'api'

const Home = ({ name, appLoadDispatch }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data: values } = await api.Common.getAll()
      appLoadDispatch({ value: 'New title' })
      setData(values)
    }
    fetchData()
  }, [appLoadDispatch])

  return (
    <Main>
      <h1>{name}</h1>
      <div style={{ marginTop: 30 }}>
        <ul>
          {data && data.length > 0
            ? data.map(({ title, id }) => <li key={id}>{title}</li>)
            : 'Aucun resultat...'}
        </ul>
      </div>
    </Main>
  )
}

Home.propTypes = {
  name: PropTypes.string,
  appLoadDispatch: PropTypes.func,
}

const mapStateToProps = (state) => ({
  name: state.common.siteName,
})

const mapDispatchToProps = (dispatch) => ({
  appLoadDispatch: (value) => {
    dispatch(appLoad(value))
  },
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default withConnect(Home)
