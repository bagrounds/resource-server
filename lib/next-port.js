/**
 * A function that returns the next available, unregistered port number.
 *
 * @module next-port
 */
;(function () {
  'use strict'

  /* imports */
  var _ = require('lodash')
  var portFinder = require('portfinder')

  portFinder.basePort = 43210

  /* exports */
  module.exports = nextPort

  /**
   * Get the next available port number
   *
   * @function nextPort
   * @alias next-port
   *
   * @param {Object} options function parameters
   * @param {Object} [options.registeredPorts] existing (used) ports
   * @param {Number} [options.basePort] port number to start from
   * @param {Function} callback handle results
   */
  function nextPort (options, callback) {
    var basePort = options.basePort

    if (basePort) {
      portFinder.basePort = basePort
    }

    portFinder.getPorts(1000, function (error, openPorts) {
      var registeredPorts = _.values(options.registeredPorts)

      if (!registeredPorts) {
        registeredPorts = []
      }

      var allPorts = _.union(openPorts, registeredPorts)

      var availablePorts = _.xor(allPorts, registeredPorts)

      callback(error, availablePorts[0])
    })
  }
})()
