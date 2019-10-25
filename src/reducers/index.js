/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'
import common from './common.reducer'
import user from './user.reducer'

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    common,
    user,
    ...injectedReducers,
  })
}
