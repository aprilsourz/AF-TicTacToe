'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  $('#back-to-signin').hide()
  $('#form-signup').hide()
  $('#form-signin').show()
  $('#no-account').show()
}

const signUpFailure = () => {
  $('.signup-fail').text('Oops something went wrong')
}

const signInSuccess = (data) => {
  $('#start-game').show()
  $('#form-signin').hide()
  $('#no-account').hide()
  $('#form-signout').show()
  $('#change-password').show()

  store.user = data.user
}

const signInFailure = () => {
  $('.signin-fail').text('Problem signing in!')
}

const changePasswordSuccess = (data) => {
  $('.password-fail').text('You changed your password!')
}

const changePasswordFailure = () => {
  $('.password-fail').text('Problem changing password!')
}

const signOutSuccess = (data) => {
  $('.hide-board').hide()
  $('#form-signout').hide()
  $('#no-account').show()
  $('#form-signin').show()
  $('#display-stats').hide()
  $('#form-reset').hide()
  $('#p1-win').hide()
  $('#p2-win').hide()
  $('#is-draw').hide()
  $('#get-games').hide()
  $('#get-one-game').hide()
  $('#start-game').hide()
  $('#change-password').hide()
  store.user = null
}

const signOutFailure = () => {
  $('.signout-fail').text('You cant sign out right now!')
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
