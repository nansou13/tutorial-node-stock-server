export const APP_LOAD = 'app/APP_LOAD'
export const SAVE_DATA = 'app/SAVE_DATA'

export function appLoad({ value }) {
  return {
    type: APP_LOAD,
    payload: { value },
  }
}

export function saveData({ value }) {
  return {
    type: SAVE_DATA,
    payload: { value },
  }
}
