'use strict'
const cellFill = (playerChoice, cellChoice) => {
  playerChoice === 1 ? $(cellChoice).text('X') : $(cellChoice).text('O')
}

const addHandlers = () => {

  $('#cell-0').click(() => {
    // function that tells us current player choice and switches between

    const player = 0
    const cellChoice = '#cell-0'
    cellFill(player, cellChoice)
  })

  $('#cell-1').click(() => {
    const player = 0
    const cellChoice = '#cell-1'
    cellFill(player, cellChoice)
  })

  $('#cell-2').click(() => {
    const player = 1
    const cellChoice = '#cell-2'
    cellFill(player, cellChoice)
  })

  $('#cell-3').click(() => {
    const player = 0
    const cellChoice = '#cell-3'
    cellFill(player, cellChoice)
  })

  $('#cell-4').click(() => {
    const player = 0
    const cellChoice = '#cell-4'
    cellFill(player, cellChoice)
  })

  $('#cell-5').click(() => {
    const player = 0
    const cellChoice = '#cell-5'
    cellFill(player, cellChoice)
  })

  $('#cell-6').click(() => {
    const player = 0
    const cellChoice = '#cell-6'
    cellFill(player, cellChoice)
  })

  $('#cell-7').click(() => {
    const player = 0
    const cellChoice = '#cell-7'
    cellFill(player, cellChoice)
  })

  $('#cell-8').click(() => {
    const player = 1
    const cellChoice = '#cell-8'
    cellFill(player, cellChoice)
  })
}

module.exports = {
  addHandlers
}
