import {
  APP_LOAD,
  SAVE_DATA,
  UPDATE_DATA,
  PAUSE_FOR_EDITION,
  RESUME,
} from '../actions/global.action'

const DEFAULT_VALUES = {
  data: null,
  isEditing: false,
}

export default function common(state = DEFAULT_VALUES, action) {
  const { type, payload } = action

  switch (type) {
    case APP_LOAD:
      return {
        ...state,
        data: payload.values.map((value) => ({
          ...value,
          stocks: {
            ...value.stocks,
            CAC40: Math.round(value.stocks.CAC40 * 100) / 100,
            NASDAQ: Math.round(value.stocks.NASDAQ * 100),
          },
        })),
      }
    case PAUSE_FOR_EDITION:
      return { ...state, isEditing: true }
    case RESUME:
      return { ...state, isEditing: false }
    case UPDATE_DATA:
      if (payload.value) {
        const newData = state.data.map((value) =>
          value.index === payload.id
            ? // eslint-disable-next-line radix
              { ...value, stocks: { ...value.stocks, [payload.type]: parseFloat(payload.value) } }
            : value
        )
        return { ...state, data: newData }
      }
      return state

    case SAVE_DATA:
      return {
        ...state,
        data: [
          ...state.data,
          {
            ...payload.value,
            stocks: {
              ...payload.value.stocks,
              CAC40: Math.round(payload.value.stocks.CAC40 * 100) / 100,
              NASDAQ: Math.round(payload.value.stocks.NASDAQ * 100),
            },
          },
        ],
      }

    default:
      return state
  }
}
