export const APP_LOAD = 'app/APP_LOAD'

export function appLoad({ value }) {
  return {
    type: APP_LOAD,
    payload: { value },
  }
}
