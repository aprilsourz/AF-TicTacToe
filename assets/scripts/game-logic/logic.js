'use strict'

const currentGame = [false, false, false, null, null, null, null, null, null]

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
    console.log('player 1 wins!!')
  }
}

const checkP2Win = (aWinCombo) => {
  doesPlayerWin = []
  for (let i = 0; i < 3; i++) {
    const acc = currentGame[aWinCombo[i]] === false
    doesPlayerWin.push(acc)
  }
  if (doesPlayerWin[0] === true && doesPlayerWin[1] === true && doesPlayerWin[2] === true) {
    console.log('player 2 wins!!')
  } else {
    console.log('player 2 does not win')
  }
}

let player = true

const pushMoveArr = (index) => {
  currentGame[index] = player
  player = !player
  console.log(currentGame)
}

module.exports = {
  pushMoveArr
}
