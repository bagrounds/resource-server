/**
 * Set event handlers on a process.
 *
 * @module configure-process-listeners
 */
;(function () {
  'use strict'

  /* exports */
  module.exports = configureProcessListeners

  /**
   *
   * @param {Object} process to configure
   *
   * @return {Object} configured process
   */
  function configureProcessListeners (process) {
    process.on('watch:restart', function (info) {
      var message = 'Restaring script because ' + info.file + ' changed'

      console.error(message)
    })

    process.on('restart', function () {
      var message = 'Forever restarting script for ' +
        process.times + ' time'
      console.error(message)
    })

    process.on('exit:code', function (code) {
      var message = 'Forever detected script exited with code ' + code
      console.error(message)
    })

    return process
  }
})()
