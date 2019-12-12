import axios from 'axios'

const responseBody = (res) => res
const responseError = () => {
  const errorMessage = 'Error: Network Error'
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
