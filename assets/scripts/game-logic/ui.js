'use strict'

const { cells } = require('./constants')

let player = true

// Function to decide if X or O is put in cell
const cellFill = (currentPlayer, cellChoice) => {
  if (currentPlayer) {
    $(cellChoice).text('X')
    player = false
  } else {
    $(cellChoice).text('O')
    player = true
  }
}

const cellEvent = (cell) => {
  cellFill(player, cell)
  $(cell).off('click')
}

const displayP1Winner = () => {
  $('.game-board').hide()
  $('#form-reset').show()
  $('#p1-win').show()
}

const displayP2Winner = () => {
  $('.game-board').hide()
  $('#form-reset').show()
  $('#p2-win').show()
}

const hideResetBtn = () => {
  $('#form-reset').hide()
}

const resetGame = () => {
  $('.game-board').show()
  $('#form-reset').hide()
  $('#p2-win').hide()
  $('#p1-win').hide()
  cells.forEach(cellId => {
    $(cellId).text('')
    $(cellId).off('click')
  })
  $('#is-draw').hide()
  player = true
}

const isDraw = () => {
  $('.game-board').hide()
  $('#form-reset').show()
  $('#is-draw').show()
}

module.exports = {
  cellEvent,
  displayP1Winner,
  displayP2Winner,
  hideResetBtn,
  resetGame,
  isDraw
}
