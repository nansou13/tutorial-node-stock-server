import { requests } from './index'
import configs from '../config'

const { api, apiMock } = configs[process.env.REACT_APP_ENV_TYPE]

const Common = {
  get: (id) => requests.get(`${api}/edito/pages/${id}`),
  newsletter: (email) =>
    requests.post(`${api}/newsletter-subscriptions/create`, {
      email,
    }),
  contact: (form) => requests.post(`${apiMock}/contact-request`, form),
}

export default {
  Common,
}
