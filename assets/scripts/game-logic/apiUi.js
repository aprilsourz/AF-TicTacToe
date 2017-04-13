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

const getGamesSuccess = (data) => {
  console.log('here are all the games', data)
}

const getGamesFailure = () => {
  console.log('error')
}

const oneGameSuccess = (data) => {
  console.log('one game', data)
}
const oneGameFailure = (data) => {
  console.log('error')
}
module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure,
  oneGameSuccess,
  oneGameFailure
}
