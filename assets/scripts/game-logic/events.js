'use strict'
const ui = require('./ui.js')
const logic = require('./logic.js')

const addHandlers = () => {
  $('#cell-0').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(0)
    logic.checkWinEvent()
  })

  $('#cell-1').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(1)
    logic.checkWinEvent()
  })

  $('#cell-2').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(2)
    logic.checkWinEvent()
  })

  $('#cell-3').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(3)
    logic.checkWinEvent()
  })

  $('#cell-4').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(4)
    logic.checkWinEvent()
  })

  $('#cell-5').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(5)
    logic.checkWinEvent()
  })

  $('#cell-6').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(6)
    logic.checkWinEvent()
  })

  $('#cell-7').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(7)
    logic.checkWinEvent()
  })

  $('#cell-8').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(8)
    logic.checkWinEvent()
  })
}

$('#form-reset').on('reset', () => {
  ui.resetGame()
  addHandlers()
  logic.resetGame()
})

module.exports = {
  addHandlers
}
