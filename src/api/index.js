import axios from 'axios'
import RoutesAPI from './routes'

// axios.defaults.withCredentials = true;

const responseBody = (res) => res
const responseError = (error) => {
  let errorMessage = 'Error: Network Error'
  if (error.response) {
    if (error.response.status === 401 || error.response.status === 403) {
      console.log('401 / 403')
    }
    if (error.response.data && error.response.data.error_message) {
      errorMessage = manageErrorMessage(error.response.data.error_message)
    } else if (
      error.response.data &&
      error.response.data.errors &&
      error.response.data.errors.message
    ) {
      errorMessage = manageErrorMessage(error.response.data.errors.message)
    }
  }
  return errorMessage
}

const manageErrorMessage = (error) => {
  const errorMessage = typeof error === 'object' ? Object.values(error)[0] : error
  return errorMessage
}

const axiosPromise = (options) =>
  new Promise((res, rej) => {
    let option = options
    const token = getToken('access_token')
    if (token) {
      option = { ...option, headers: { Authorization: `Bearer ${token}` } }
    }

    axios(option)
      .then((response) => {
        res(responseBody(response))
      })
      .catch((error) => {
        rej(responseError(error))
      })
  })

export const requests = {
  get: (url) =>
    axiosPromise({
      url,
    }),
  put: (url, body) =>
    axiosPromise({
      url,
      method: 'put',
      data: body,
    }),
  del: (url, body) =>
    axiosPromise({
      url,
      method: 'del',
      data: body,
    }),
  post: (url, body) =>
    axiosPromise({
      url,
      method: 'post',
      data: body,
    }),
}

const getToken = (tokenName) => localStorage.getItem(tokenName)

export const setToken = (token) => {
  localStorage.setItem('authToken', token)
}

const GlobalAPI = {
  ...RoutesAPI,
}

export default GlobalAPI
