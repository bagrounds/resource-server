;(function () {
  /* global describe, it */
  'use strict'

  var chai = require('chai')

  var nextPort = require('../lib/next-port')

  describe('next-port', function () {
    it('give an unregistered port', function (next) {
      var registeredPorts = [
        12345,
        12346,
        12347,
        12349
      ]
      var unregisteredPort = 12348

      var nextPortOptions = {
        registeredPorts: registeredPorts,
        basePort: 12345
      }

      nextPort(nextPortOptions, function (error, port) {
        chai.expect(error).to.be.null

        chai.expect(port).to.equal(unregisteredPort)

        next()
      })
    })
  })
})()
