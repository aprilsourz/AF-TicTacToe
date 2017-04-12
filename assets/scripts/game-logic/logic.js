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

const checkDraw = () => {
  let isDrawArr = []
  isDrawArr = currentGame.filter((element) => {
    return element !== null
  })
  if (isDrawArr.length === 9) {
    return true
  }
  player = !player
}

const checkWinEvent = () => {
  if (player === true) {
    for (let i = 0; i < winCombos.length; i++) {
      if (checkP1Win(winCombos[i]) === true) {
        break
      }
    }
  } else if (player === false) {
    for (let i = 0; i < winCombos.length; i++) {
      if (checkP2Win(winCombos[i]) === true) {
        break
      }
    }
  }
  if (checkDraw() === true) {
    ui.isDraw()
    return
  }
}

const pushMoveArr = (index) => {
  currentGame[index] = player
  console.log(currentGame, player)
  console.log('pushArr player is', player)
}

const resetGame = () => {
  currentGame = [null, null, null, null, null, null, null, null, null]
  player = true
}

module.exports = {
  pushMoveArr,
  checkWinEvent,
  resetGame
}
