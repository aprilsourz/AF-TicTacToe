'use strict'
const ui = require('./ui.js')

const addHandlers = () => {
  $('#cell-0').click(() => {
    ui.cellEvent(event.target)
  })

  $('#cell-1').click(() => {
    ui.cellEvent(event.target)
  })

  $('#cell-2').click(() => {
    ui.cellEvent(event.target)
  })

  $('#cell-3').click(() => {
    ui.cellEvent(event.target)
  })

  $('#cell-4').click(() => {
    ui.cellEvent(event.target)
  })

  $('#cell-5').click(() => {
    ui.cellEvent(event.target)
  })

  $('#cell-6').click(() => {
    ui.cellEvent(event.target)
  })

  $('#cell-7').click(() => {
    ui.cellEvent(event.target)
  })

  $('#cell-8').click(() => {
    ui.cellEvent(event.target)
  })
}

module.exports = {
  addHandlers
}
