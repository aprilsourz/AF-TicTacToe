'use strict'
let player = true
const gameBoard = [null, null, null, null, null, null, null, null, null]

const pushMoveArr = (index) => {
  gameBoard[index] = player
  player = !player
  console.log(gameBoard)
}

module.exports = {
  pushMoveArr
}
