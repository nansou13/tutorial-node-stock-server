import { requests } from './request'

const Common = {
  getFirstElements: () => requests.get(`http://localhost:8008/?count=20`),
  getLast: () => requests.get(`http://localhost:8008/?count=1`),
}

export default {
  Common,
}
