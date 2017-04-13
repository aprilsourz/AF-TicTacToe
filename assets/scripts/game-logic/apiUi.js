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
  $('#display-stats').text('You have played ' + data.games.length + ' games of tic tac toe so far!')
}

const getGamesFailure = () => {
  $('#display-stats').text('Please Sign in!')
}

const oneGameSuccess = (data) => {
  console.log('one game', data)
  if (data.game.over) {
    $('#display-stats').text('Game number ' + data.game.id + ' was completed')
  } else {
    $('#display-stats').text('Game number ' + data.game.id + ' was not completed')
  }
}
const oneGameFailure = (data) => {
  $('#display-stats').text('Please enter a valid ID!')
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
