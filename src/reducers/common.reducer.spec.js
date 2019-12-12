import { expect } from 'chai'
import * as actions from '../actions/global.action'
import common from './common.reducer'

const formatArray = (arrayValues) =>
  arrayValues.map((value) => ({
    ...value,
    stocks: {
      ...value.stocks,
      CAC40: Math.round(value.stocks.CAC40 * 100) / 100,
      NASDAQ: Math.round(value.stocks.NASDAQ * 100),
    },
  }))

const arrayValues = [
  {
    timestamp: 1576096456540,
    index: 1,
    stocks: {
      NASDAQ: 9.971326761277012,
      CAC40: 145.293302630023,
    },
  },
  {
    timestamp: 1576096457561,
    index: 2,
    stocks: {
      NASDAQ: 9.985167754304092,
      CAC40: 90.40672503192006,
    },
  },
  {
    timestamp: 1576096458561,
    index: 3,
    stocks: {
      NASDAQ: 9.981823896775474,
      CAC40: 90.39017756930647,
    },
  },
]

describe('common reducers', () => {
  it('APP_LOAD', () => {
    const initialState = {
      data: null,
      isEditing: false,
    }
    const action = {
      type: actions.APP_LOAD,
      payload: { values: arrayValues },
    }
    const newState = common(initialState, action)
    expect(newState).to.eql({
      data: formatArray(arrayValues),
      isEditing: false,
    })
  })
  it('PAUSE_FOR_EDITION', () => {
    const initialState = {
      data: null,
      isEditing: false,
    }
    const action = {
      type: actions.PAUSE_FOR_EDITION,
    }
    const newState = common(initialState, action)
    expect(newState).to.eql({
      data: null,
      isEditing: true,
    })
  })
  it('RESUME', () => {
    const initialState = {
      data: null,
      isEditing: true,
    }
    const action = {
      type: actions.RESUME,
    }
    const newState = common(initialState, action)
    expect(newState).to.eql({
      data: null,
      isEditing: false,
    })
  })
  it('UPDATE_DATA', () => {
    const initialState = {
      data: formatArray(arrayValues),
      isEditing: false,
    }
    const action = {
      type: actions.UPDATE_DATA,
      payload: { id: 2, value: '39', type: 'CAC40' },
    }
    const newState = common(initialState, action)
    const newData = initialState.data.map((value) =>
      value.index === action.payload.id
        ? {
            ...value,
            // eslint-disable-next-line radix
            stocks: { ...value.stocks, [action.payload.type]: parseFloat(action.payload.value) },
          }
        : value
    )

    expect(newState).to.eql({
      data: newData,
      isEditing: false,
    })
  })
  it('SAVE_DATA', () => {
    const initialState = {
      data: formatArray(arrayValues),
      isEditing: false,
    }
    const action = {
      type: actions.SAVE_DATA,
      payload: {
        value: {
          timestamp: 1576097846032,
          index: 4,
          stocks: {
            NASDAQ: 30,
            CAC40: 34,
          },
        },
      },
    }
    const newState = common(initialState, action)
    const newData = [
      ...initialState.data,
      {
        ...action.payload.value,
        stocks: {
          ...action.payload.value.stocks,
          CAC40: Math.round(action.payload.value.stocks.CAC40 * 100) / 100,
          NASDAQ: Math.round(action.payload.value.stocks.NASDAQ * 100),
        },
      },
    ]

    expect(newState).to.eql({
      data: newData,
      isEditing: false,
    })
  })
})
