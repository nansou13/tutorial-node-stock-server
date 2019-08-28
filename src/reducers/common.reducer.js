import { APP_LOAD } from '../actions/global.action'

const DEFAULT_VALUES = {
  loaded: false,
  siteName: 'React-Redux-Boilerplate',
}

export default function common(state = DEFAULT_VALUES, action) {
  const { type, payload } = action

  switch (type) {
    case APP_LOAD:
      return { ...state, loaded: true, siteName: payload.value || 'React-Redux-Boilerplate' }
    default:
      return state
  }
}
