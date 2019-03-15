/* eslint-disable */

/***********/
/* Init    */
/***********/
const _ = require('lodash')
const low = require('lowdb')
const logger = require('./logger')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('src/utils/mock/db.json')
const db = low(adapter)

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const textParser = bodyParser.text()
const jsonParser = bodyParser.json()

const server = express()
const whitelist = ['http://localhost:3000', 'http://localhost:3001']
server.use(cors({ origin: whitelist, credentials: true }))

const port = 3004
const host = process.env.HOST

/***********/
/* Routes  */
/***********/
server.get('/db', (req, res) => {
  res.json(db)
})

/* PRACTIONERS GET INFOS */
server.get('/practitioners/me', (req, res) => {
  const users = db.get('users').value()
  res.json(users)
})
/* PRACTIONERS UPDATE INFOS */
server.put('/practitioners/me', (req, res) => {
  res.send('')
})

/* /appointments UPDATE INFOS */
server.post('/appointments', (req, res) => {
  res.send('')
})
/* GET /me */
server.get('/examples/:id', (req, res) => {
  const id = req.params.id
  const data = db
    .get('examples')
    .find({ id })
    .value()

  res.json(data)
})

/* 404 */
server.get('*', (req, res) => {
  res.status(404)
})

server.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message)
  }

  logger.appStarted(port, 'localhost')
})
