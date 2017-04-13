'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createGame = () => {
  return $.ajax({
    method: 'POST',
    url: config.apiOrigin + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}
module.exports = {
  createGame
}
