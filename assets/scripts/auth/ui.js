'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('sign up success', data)
  $('#back-to-signin').hide()
  $('#form-signup').hide()
  $('#form-signin').show()
  $('#no-account').show()
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  $('#start-game').show()
  $('#form-signin').hide()
  $('#no-account').hide()
  $('#form-signout').show()
  console.log('sign in success', data)
  store.user = data.user
}

const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  console.log('changed password!', data)
}

const changePasswordFailure = (error) => {
  console.error('failed to change password', error)
}

const signOutSuccess = (data) => {
  console.log('you are signed out!')
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
  store.user = null
}

const signOutFailure = (error) => {
  console.error('error on sign out ', error)
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
