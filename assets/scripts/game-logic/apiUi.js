'use strict'

const store = require('../store.js')

const createGameSuccess = (data) => {
  store.game = data.game.id
}

const createGameFailure = () => {
  )
}

const updateGameSuccess = (data) => {

}

const updateGameFailure = () => {

}

const getGamesSuccess = (data) => {
  $('#display-stats').text('You have played ' + data.games.length + ' games of tic tac toe so far!')
}

const getGamesFailure = () => {

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
