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
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure

}
