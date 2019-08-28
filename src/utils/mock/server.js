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
const bodyParser = require('body-parser').json()

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
server.get('/me', (req, res) => {
  const users = db.get('users').value()
  res.json(users)
})

server.get('/users', (req, res) => {
  const users = db.get('practitioners').value()
  res.json(users)
})
/* PRACTIONERS UPDATE INFOS */
server.put('/practitioners/me', (req, res) => {
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

/* POST */
server.post(`/user`, bodyParser, (req, res) => {
  const {email, password} = req.body || {}
 
  let users = {}
  if(email && email === 'test@test.test'){
    users ={
      "status": "400 XXXxxxxx",
      "error": "authentication failed"
    }
    res.status(400).json(users)
  }else{
    users = {
      "status": [
        "success"
      ],
      "token": "MzeeHwDvP6EUsssSztu5167nNNKPdZFmvvFDP437qWa1R1jkx25uYh7HXs0tr3f1"
    }
    res.json(users)
  }
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
