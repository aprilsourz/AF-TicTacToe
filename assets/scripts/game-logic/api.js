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

const updateGame = (inCell, ix, over) => {
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
        'over': over
      }
    }
  })
}

const getGames = () => {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token }
  })
}

const getOneGame = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/games/' + data.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token }
  })
}

module.exports = {
  createGame,
  updateGame,
  getGames,
  getOneGame
}
