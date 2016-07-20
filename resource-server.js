/**
 * Executable file to start app.
 *
 * @module resource-server
 */
;(function () {
  'use strict'

  /** imports */
  var serve = require('serve-function')
  var path = require('path')

  var functionRequireName = path.resolve(
    __dirname,
    'lib',
    'serve-incoming-function.js'
  )

  var serveOptions = {
    functionRequireName: functionRequireName
  }

  serve(serveOptions, function (error, result) {
    if (error) {
      console.error(error)
      return
    }

    console.log('up')
  })
})()
