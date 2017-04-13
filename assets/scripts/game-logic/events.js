'use strict'
const ui = require('./ui.js')
const logic = require('./logic.js')
const { cells } = require('./constants')

const addHandlers = () => {
  cells.forEach((cellId, ix) => {
    $(cellId).click(() => {
      ui.cellEvent(event.target)
      logic.pushMoveArr(ix)
      logic.checkWinEvent(event.target.innerHTML)
    })
  })
}

$('#form-reset').on('reset', () => {
  ui.resetGame()
  addHandlers()
  logic.resetGameLogic()
})

module.exports = {
  addHandlers
}
