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

const displayWinner = (player) => {
  $('.hide-board').hide()
  $('#form-reset').show()
  $(`#${player}-win`).show()
}

const displayP1Winner = () => {
  displayWinner('p1')
}

const displayP2Winner = () => {
  displayWinner('p2')
}

const hideResetBtn = () => {
  $('#form-reset').hide()
}

const resetGame = () => {
  $('.hide-board').show()
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
  $('.hide-board').hide()
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
