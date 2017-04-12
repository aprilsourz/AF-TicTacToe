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
  $(cell).off('click')
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
}

module.exports = {
  cellEvent,
  displayP1Winner,
  displayP2Winner,
  hideResetBtn,
  resetGame
}
