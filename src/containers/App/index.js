import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { appLoad, saveData, updateData, pauseForEdition, resume } from 'actions/global.action'
import api from 'api'

import ShowDataInput from 'components/ShowDataInput'
import ShowChart from 'components/ShowChart'

const App = ({
  appLoadDispatch,
  data,
  saveDataDispatch,
  updateDataDispatch,
  pauseForEditionDispatch,
  resumeDispatch,
  isEditing,
}) => {
  const [temp, setTemp] = useState([])
  const maxValue = 20

  const pauseAction = () => {
    pauseForEditionDispatch()
    setTemp(data && data.slice(Math.max(data.length - maxValue, 0)))
  }

  const resumeAction = () => {
    resumeDispatch()
  }

  const updateDatas = (index, value, type) => {
    setTemp(
      temp.map((current) =>
        current.index === index
          ? { ...current, stocks: { ...current.stocks, [type]: value } }
          : current
      )
    )
    if (value) {
      updateDataDispatch(index, value, type)
    }
  }

  useEffect(() => {
    async function fetchData() {
      const { data: values } = await api.Common.getFirstElements()
      if (values) {
        appLoadDispatch(values)
      }
    }
    fetchData()
  }, [appLoadDispatch])

  useEffect(() => {
    async function getValuesInterval() {
      const {
        data: [value],
      } = await api.Common.getLast()
      if (value) {
        saveDataDispatch(value)
      }
    }

    const id = setInterval(getValuesInterval, 1000)
    return () => clearInterval(id)
  }, [saveDataDispatch])

  return (
    <div>
      <ShowChart data={data} />
      <table>
        {['CAC40', 'NASDAQ'].map((type) => (
          <tr>
            <ShowDataInput
              type={type}
              data={isEditing ? temp : data}
              handleBlur={() => resumeAction()}
              handleFocus={() => pauseAction()}
              handleChange={(index, value) => updateDatas(index, value, type)}
              maxValue={maxValue}
            />
          </tr>
        ))}
      </table>
    </div>
  )
}

App.propTypes = {
  appLoadDispatch: PropTypes.func,
  data: PropTypes.array,
  saveDataDispatch: PropTypes.func,
  updateDataDispatch: PropTypes.func,
  pauseForEditionDispatch: PropTypes.func,
  resumeDispatch: PropTypes.func,
  isEditing: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  data: state.common.data,
  temp: state.common.temp,
  isEditing: state.common.isEditing,
})

const mapDispatchToProps = (dispatch) => ({
  appLoadDispatch: (value) => {
    dispatch(appLoad(value))
  },
  saveDataDispatch: (value) => {
    dispatch(saveData(value))
  },
  updateDataDispatch: (index, value, type) => {
    dispatch(updateData(index, value, type))
  },
  pauseForEditionDispatch: () => {
    dispatch(pauseForEdition())
  },
  resumeDispatch: () => {
    dispatch(resume())
  },
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default withConnect(App)
