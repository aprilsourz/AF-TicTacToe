'use strict'
const ui = require('./ui.js')
const logic = require('./logic.js')

const addHandlers = () => {
  $('#cell-0').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(0)
  })

  $('#cell-1').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(1)
  })

  $('#cell-2').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(2)
  })

  $('#cell-3').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(3)
  })

  $('#cell-4').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(4)
  })

  $('#cell-5').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(5)
  })

  $('#cell-6').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(6)
  })

  $('#cell-7').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(7)
  })

  $('#cell-8').click(() => {
    ui.cellEvent(event.target)
    logic.pushMoveArr(8)
  })
}

module.exports = {
  addHandlers
}
