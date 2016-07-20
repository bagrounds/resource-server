;(function () {
  'use strict'

  var chai = require('chai')
  var unServe = require('served-function-as-function')

  var expect = chai.expect

  describe('resource-server', function () {
    this.timeout(15000)

    it('serves functions', function (next) {
      require('../resource-server')

      console.log('testing')
      setTimeout(function () {
        console.log('testing')
        testResourceServer(next)
      }, 5000)
    })
  })

  function testResourceServer (next) {
    var resourceServerOptions = {
      functionInstallName: 'bagrounds/serve-function-module-template',
      functionRequireName: 'serve-function-module-template'
    }

    var url = 'http://localhost:43210'

    unServe(url, resourceServerOptions, function (error, result) {
      console.error('error: ' + error)
      console.log('result: ' + JSON.stringify(result))

      expect(error).to.not.be.ok

      unServe(url, {}, function (error, result) {
        console.error('error: ' + error)
        console.log('result: ' + JSON.stringify(result))
        expect(error).to.not.be.ok
        var port = result[resourceServerOptions.functionRequireName]

        var options = {
          x: 1,
          y: 2,
          z: 3
        }

        var serviceUrl = 'http://localhost:' + port

        setTimeout(function () {
          unServe(serviceUrl, options, function (error, result) {
            console.error('error: ' + JSON.stringify(error))
            console.log('result: ' + JSON.stringify(result))
            expect(error).to.not.be.ok
            expect(result).to.equal('123')
            next()
          })
        }, 5000)
      })
    })
  }
})()
