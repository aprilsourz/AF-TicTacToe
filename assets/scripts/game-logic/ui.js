'use strict'

let player = true

// Function to decide if X or O is put in cell
const cellFill = (currentPlayer, cellChoice) => {
  if (currentPlayer === true) {
    $(cellChoice).text('X')
  } else if (currentPlayer === false) {
    $(cellChoice).text('O')
  }
}

const cellEvent = (cell) => {
  console.log('cell event player is', player)
  const cellChoice = cell
  cellFill(player, cellChoice)
  $(cell).unbind('click')
  player = !player
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

module.exports = {
  cellEvent,
  displayP1Winner,
  displayP2Winner,
  hideResetBtn

}
