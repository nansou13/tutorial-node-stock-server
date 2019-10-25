import { Main } from 'components/Layout'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { appLoad } from 'actions/global.action'
import injectSaga from 'utils/injectSaga'
import api from 'api'

import saga from './saga'

const Home = ({ name, appLoadDispatch, datas }) => {
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
            ? data.slice(0, 5).map(({ title, id }) => <li key={id}>{title}</li>)
            : 'Aucun resultat...'}
        </ul>
      </div>

      <h1>Saga-redux</h1>
      <div style={{ marginTop: 30 }}>
        <ul>
          {datas && datas.length > 0
            ? datas.slice(5, 18).map(({ title, id }) => <li key={id}>{title}</li>)
            : 'Aucun resultat...'}
        </ul>
      </div>
    </Main>
  )
}

Home.propTypes = {
  name: PropTypes.string,
  appLoadDispatch: PropTypes.func,
  datas: PropTypes.array,
}

const mapStateToProps = (state) => ({
  name: state.common.siteName,
  datas: state.common.data,
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

const withSaga = injectSaga({ key: 'AppPage', saga })

export default compose(
  withConnect,
  withSaga
)(Home)
