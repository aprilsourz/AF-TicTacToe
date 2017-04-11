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
  const cellChoice = cell
  cellFill(player, cellChoice)
  $(cell).unbind('click')
  player = !player
}

module.exports = {
  cellFill,
  cellEvent

}
