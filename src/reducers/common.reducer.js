import { APP_LOAD, SAVE_DATA } from '../actions/global.action'

const DEFAULT_VALUES = {
  loaded: false,
  siteName: 'React-Redux-Boilerplate',
  data: [],
}

export default function common(state = DEFAULT_VALUES, action) {
  const { type, payload } = action

  switch (type) {
    case APP_LOAD:
      return { ...state, loaded: true, siteName: payload.value || 'React-Redux-Boilerplate' }
    case SAVE_DATA:
      return { ...state, data: payload.value }
    default:
      return state
  }
}
