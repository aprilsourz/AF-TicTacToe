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

const updateGame = (inCell, ix) => {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': ix,
          'value': inCell
        },
        'over': false
      }
    }
  })
}
module.exports = {
  createGame,
  updateGame
}
