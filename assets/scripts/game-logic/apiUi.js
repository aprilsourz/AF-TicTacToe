'use strict'

const createGameSuccess = (data) => {
  console.log('you created the game')
  console.log(data)
}

const createGameFailure = () => {
  console.log('error')
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
