'use strict'
const ui = require('./ui.js')
const logic = require('./logic.js')

const cells = [
  '#cell-0',
  '#cell-1',
  '#cell-2',
  '#cell-3',
  '#cell-4',
  '#cell-5',
  '#cell-6',
  '#cell-7',
  '#cell-8'
]

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
