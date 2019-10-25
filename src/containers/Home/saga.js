import { call, put } from 'redux-saga/effects' // all, select
import api from 'api'
import { saveData } from 'actions/global.action'

export function* initFunction() {
  try {
    const { data: value } = yield call(() => api.Common.getAll())
    yield put(saveData({ value }))
  } catch (err) {
    console.log('[ERROR][src/containers/App/saga.js][initFunction]', err)
  }
}
export function* checkToken() {
  // try {
  //   if (localStorage.getItem('access_token')) {
  //     const { currentUser, isUserConnected } = yield select((state) => state.user)
  //     if (!currentUser || !isUserConnected) {
  //       const {
  //         data: { data: dataUser },
  //       } = yield call(() => api.User.get())
  //       // SAVE USER
  //       yield put(saveUserInfos(dataUser))
  //     }
  //   } else {
  //     yield put(setUserConnected(false))
  //   }
  // } catch (err) {
  //   console.log('[ERROR][src/containers/App/saga.js][checkToken]', err)
  // }
}

export default function* sagas() {
  // yield all([call(checkToken), call(initFunction)])
  yield call(initFunction)
}
