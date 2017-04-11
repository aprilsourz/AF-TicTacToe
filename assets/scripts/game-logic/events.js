'use strict'
const ui = require('./ui.js')

const addHandlers = () => {
  let player = true

  $('#cell-0').click(() => {
    console.log(player)
    const cellChoice = '#cell-0'
    ui.cellFill(player, cellChoice)
    player = !player
  })

  $('#cell-1').click(() => {
    console.log(player)
    const cellChoice = '#cell-1'
    ui.cellFill(player, cellChoice)
    player = !player
  })

  $('#cell-2').click(() => {
    console.log(player)
    const cellChoice = '#cell-2'
    ui.cellFill(player, cellChoice)
    player = !player
  })

  $('#cell-3').click(() => {
    console.log(player)
    const cellChoice = '#cell-3'
    ui.cellFill(player, cellChoice)
    player = !player
  })

  $('#cell-4').click(() => {
    console.log(player)
    const cellChoice = '#cell-4'
    ui.cellFill(player, cellChoice)
    player = !player
  })

  $('#cell-5').click(() => {
    console.log(player)
    const cellChoice = '#cell-5'
    ui.cellFill(player, cellChoice)
    player = !player
  })

  $('#cell-6').click(() => {
    console.log(player)
    const cellChoice = '#cell-6'
    ui.cellFill(player, cellChoice)
    player = !player
  })

  $('#cell-7').click(() => {
    console.log(player)
    const cellChoice = '#cell-7'
    ui.cellFill(player, cellChoice)
    player = !player
  })

  $('#cell-8').click(() => {
    console.log(player)
    const cellChoice = '#cell-8'
    ui.cellFill(player, cellChoice)
    player = !player
  })
}

module.exports = {
  addHandlers
}
