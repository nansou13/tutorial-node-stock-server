const globalConfig = {
  defaultLocal: 'en',
}
const production = {
  api: 'http://localhost:3004',
  debug: false,
  ...globalConfig,
}
const development = {
  api: 'http://localhost:3004',
  debug: false,
  ...globalConfig,
}
const preprod = {
  api: 'http://localhost:3004',
  debug: false,
  ...globalConfig,
}

const configs = {
  production,
  development,
  preprod,
}

export default configs[process.env.REACT_APP_ENV_TYPE]

export const allconfigs = configs
