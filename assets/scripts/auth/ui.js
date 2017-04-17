'use strict'

const store = require('../store.js')
const gameUi = require('../game-logic/ui.js')

const displayErrorMessage = (errorText) => {
  $('#display-error').show()
  $('#display-error').text(errorText || 'Unknown error')
  $('#display-error').delay(3000).fadeOut()
}

const signUpSuccess = (data) => {
  $('#back-to-signin').hide()
  $('#form-signup').hide()
  $('#form-signin').show()
  $('#no-account').show()
}

const signUpFailure = (error) => {
  if (error.status === 400) {
    displayErrorMessage('There was problem signing up, please try again!')
  } else {
    displayErrorMessage()
  }
}

const signInSuccess = (data) => {
  $('#start-game').show()
  $('#form-signin').hide()
  $('#no-account').hide()
  $('#form-signout').show()
  $('#change-password').show()

  store.user = data.user
}

const signInFailure = (error) => {
  if (error.status === 401) {
    displayErrorMessage('Invalid username or password.')
  } else {
    displayErrorMessage()
  }
}

const changePasswordSuccess = (data) => {
  displayErrorMessage('You changed your password!')
}

const changePasswordFailure = (error) => {
  if (error.status === 400) {
    displayErrorMessage('Invalid password.')
  } else {
    displayErrorMessage()
  }
}

const signOutSuccess = (data) => {
  $('#form-signout').hide()
  $('#no-account').show()
  $('#form-signin').show()
  $('#display-stats').hide()
  $('#is-draw').hide()
  $('#get-games').hide()
  $('#get-one-game').hide()
  $('#start-game').hide()
  $('#change-password').hide()
  $('.game-list').html('')
  gameUi.resetGame()
  $('.hide-board').hide()

  store.user = null
}

const signOutFailure = () => {
  // $('.signout-fail').text('You cant sign out right now!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutFailure,
  signOutSuccess

}
