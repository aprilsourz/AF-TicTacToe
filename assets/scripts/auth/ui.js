'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log('sign up success', data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
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
