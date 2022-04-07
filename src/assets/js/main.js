import app from 'lib/init'
import 'lib/lazysizes'
import 'modules/**/*.js'

document.addEventListener('DOMContentLoaded', () => {
  // This call looks in the DOM for all "data-module"
  // attributes and instantiates relevant modules
  // based on the attributes found.
  app.init()
})
