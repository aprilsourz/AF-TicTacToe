'use strict'

const store = require('../store.js')

const createGameSuccess = (data) => {
  store.game = data.game.id
}

const createGameFailure = () => {

}

const updateGameSuccess = () => {

}

const updateGameFailure = () => {

}

const getGamesSuccess = (data) => {
  $('.game-list').html('')
  const games = data.games
  const gameList = $('ul.game-list')
  games.forEach((g) => {
    const li = $('<li/>')
        .addClass('ui-menu-item')
        .attr('role', 'menuitem')
        .appendTo(gameList)
    const link = $('<span/>')
        .addClass('ui-all')
        .text('game id ' + g.id)
        .appendTo(li)
  })
  $('#display-stats').text('You have played ' + data.games.length + ' games of tic tac toe so far! These are the Ids for each game.')
}

const getGamesFailure = () => {
  $('#display-stats').text('Problem getting games!')
}

const oneGameSuccess = (data) => {
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
