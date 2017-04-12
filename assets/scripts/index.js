'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

// requiring folders for event handlers
const authEvents = require('./auth/events.js')
const uiEvents = require('./game-logic/events.js')
const ui = require('./game-logic/ui.js')
// on document ready
$(() => {
  authEvents.addHandlers()
  uiEvents.addHandlers()
})
