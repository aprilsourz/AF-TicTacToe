'use strict'

const ui = require('./ui.js')

let player = true

let currentGame = [null, null, null, null, null, null, null, null, null]

const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [1, 4, 7],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6]
]

const checkPlayerWin = (aWinCombo, player) => {
  const result = aWinCombo.map(number => currentGame[number])
  const maybeWinningCombo = result.every(x => x === player)
  if (maybeWinningCombo) {
    player ? ui.displayP1Winner() : ui.displayP2Winner()
  }
  return maybeWinningCombo
}

const checkDraw = (game) => {
  player = !player
  return !game.includes(null)
}

const checkWinEvent = (player) => {
  console.log(currentGame)
  const isX = player === 'X'
  winCombos.some((combo) => checkPlayerWin(combo, isX) === true)
  if (checkDraw(currentGame) === true) {
    ui.isDraw()
    return
  }
}

const pushMoveArr = (index) => {
  console.log(player)
  currentGame[index] = player
}

const resetGameLogic = () => {
  currentGame = [null, null, null, null, null, null, null, null, null]
  player = true
}

module.exports = {
  pushMoveArr,
  checkWinEvent,
  resetGameLogic
}
