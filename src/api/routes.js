import { requests } from './index'
import configs from '../config'

const { api, apiMock } = configs

const Common = {
  getAll: () => requests.get(`https://jsonplaceholder.typicode.com/posts`),
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
