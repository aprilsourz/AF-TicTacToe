'use strict'
// for game logic
const ui = require('./ui.js')
const logic = require('./logic.js')
const { cells } = require('./constants')
// for game api
const api = require('./api.js')
const apiUi = require('./apiUi.js')

const getFormFields = require(`../../../lib/get-form-fields`)

// generates click event for each cell in gameboard
const addHandlers = () => {
  cells.forEach((cellId, ix) => {
    $(cellId).click(() => {
      ui.cellEvent(event.target)
      logic.pushMoveArr(ix)
      const over = logic.checkWinEvent(event.target.innerHTML)
      api.updateGame(event.target.innerHTML, ix, over)
        .then(apiUi.updateGameSuccess)
        .catch(apiUi.updateGameFailure)
    })
  })
}

// play again button event
$('#form-reset').on('reset', () => {
  ui.resetGame()
  addHandlers()
  logic.resetGameLogic()
  onStartGame(event)
})

// api create game event
const onStartGame = (event) => {
  event.preventDefault()
  api.createGame()
  .then(apiUi.createGameSuccess)
  .catch(apiUi.createGameFailure)
  $('#start-game').hide()
  $('.hide-board').show()
}

const onGetGames = (event) => {
  event.preventDefault()
  api.getGames()
  .then(apiUi.getGamesSuccess)
  .catch(apiUi.getGamesFailure)
}
const onGetOneGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.getOneGame(data)
    .then(apiUi.oneGameSuccess)
    .catch(apiUi.oneGameFailure)
}

$('#start-game').on('submit', onStartGame)
$('#get-games').on('submit', onGetGames)
$('#get-one-game').on('submit', onGetOneGame)

module.exports = {
  addHandlers
}
