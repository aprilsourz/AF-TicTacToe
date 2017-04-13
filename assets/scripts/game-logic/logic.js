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

let doesPlayerWin = []

const checkP1Win = (aWinCombo) => {
  doesPlayerWin = []
  for (let i = 0; i < 3; i++) {
    const acc = currentGame[aWinCombo[i]] === true
    doesPlayerWin.push(acc)
  }
  if (doesPlayerWin[0] === true && doesPlayerWin[1] === true && doesPlayerWin[2] === true) {
    ui.displayP1Winner()
  } else {
    console.log('player 1 does not win')
  }
  return doesPlayerWin[0] === true && doesPlayerWin[1] === true && doesPlayerWin[2] === true
}

const checkP2Win = (aWinCombo) => {
  doesPlayerWin = []
  for (let i = 0; i < 3; i++) {
    const acc = currentGame[aWinCombo[i]] === false
    doesPlayerWin.push(acc)
  }
  if (doesPlayerWin[0] === true && doesPlayerWin[1] === true && doesPlayerWin[2] === true) {
    ui.displayP2Winner()
  }
  return doesPlayerWin[0] === true && doesPlayerWin[1] === true && doesPlayerWin[2] === true
}

const checkDraw = (game) => {
  player = !player
  return !game.includes(null)
}

const checkWinEvent = () => {
  if (player === true) {
    winCombos.some((combo) => checkP1Win(combo) === true)
  } else if (player === false) {
    winCombos.some((combo) => checkP2Win(combo) === true)
  }
  if (checkDraw(currentGame) === true) {
    ui.isDraw()
    return
  }
}

const pushMoveArr = (index) => {
  currentGame[index] = player
  console.log(currentGame, player)
  console.log('pushArr player is', player)
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
