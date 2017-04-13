'use strict'

let player = true

// Function to decide if X or O is put in cell
const cellFill = (currentPlayer, cellChoice) => {
  if (currentPlayer === true) {
    $(cellChoice).text('X')
    player = false
  } else if (currentPlayer === false) {
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
  $('#cell-0').text('')
  $('#cell-1').text('')
  $('#cell-2').text('')
  $('#cell-3').text('')
  $('#cell-4').text('')
  $('#cell-5').text('')
  $('#cell-6').text('')
  $('#cell-7').text('')
  $('#cell-8').text('')
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
