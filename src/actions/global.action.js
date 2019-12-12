export const APP_LOAD = 'app/APP_LOAD'
export const SAVE_DATA = 'app/SAVE_DATA'
export const UPDATE_DATA = 'app/UPDATE_DATA'
export const PAUSE_FOR_EDITION = 'app/PAUSE_FOR_EDITION'
export const RESUME = 'app/RESUME'

export function appLoad(values) {
  return {
    type: APP_LOAD,
    payload: { values },
  }
}

export function saveData(value) {
  return {
    type: SAVE_DATA,
    payload: { value },
  }
}
export function updateData(id, value, type) {
  return {
    type: UPDATE_DATA,
    payload: { id, value, type },
  }
}
export function pauseForEdition() {
  return {
    type: PAUSE_FOR_EDITION,
  }
}
export function resume() {
  return {
    type: RESUME,
  }
}
