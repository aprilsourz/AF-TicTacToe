'use strict'

const store = require('../store.js')

const createGameSuccess = (data) => {
  console.log(data)
  store.game = data.game.id
  console.log(store.game)
}

const createGameFailure = () => {
  console.log('error')
}

const updateGameSuccess = (data) => {
  console.log(data.game.over, data.game.cells)
}

const updateGameFailure = () => {
  console.log('error')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure
}
