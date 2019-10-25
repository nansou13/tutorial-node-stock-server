import { Main } from 'components/Layout'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { appLoad } from 'actions/global.action'
import api from 'api'
import WithLoading from 'hoc/WithLoading'

const ShowDataWithLoading = WithLoading((props) => <ShowData {...props} />)
const ShowData = ({ values, start, nb }) => (
  <div style={{ marginTop: 30 }}>
    <ul>
      {values && values.length > 0
        ? values.slice(start, nb).map(({ title, id }) => <li key={id}>{title}</li>)
        : 'Aucun resultat...'}
    </ul>
  </div>
)

const Home = ({ name, appLoadDispatch, datas }) => {
  const [data, setData] = useState(null)

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
      <div style={{ width: 350 }}>
        <ShowDataWithLoading isLoading={!data} values={data} start={0} nb={5} />
      </div>

      <h1>Saga-redux</h1>
      <div style={{ width: 350 }}>
        <ShowDataWithLoading isLoading={!datas} values={datas} start={5} nb={15} />
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

export default withConnect(Home)
