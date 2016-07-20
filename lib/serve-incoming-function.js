/**
 * @module serve-incoming-function
 */
;(function () {
  'use strict'

  /* imports */
  var forever = require('forever-monitor')
  var path = require('path')
  var Configstore = require('configstore')

  var nextPort = require('./next-port')
  var configureProcessListeners = require('./configure-process-listeners')
  var pkg = require('../package')

  /* module variables */
  var PORTS = 'ports'
  var BASE_PORT = 43210

  var configName = pkg.name + pkg.version + '_serve-incoming-function'
  var conf = new Configstore(configName)

  var serveBinary = path.resolve(
    __dirname,
    '..',
    'node_modules',
    '.bin',
    'serve-function'
  )

  addPort({
    name: pkg.name,
    port: BASE_PORT
  })

  /* exports */
  module.exports = serveIncomingFunction

  /**
   *
   * @param {Object} options function parameters
   * @param {String} [options.functionRequireName] used to require module
   * @param {String} [options.functionInstallName] used to install module
   * @param {Function} callback handle results
   */
  function serveIncomingFunction (options, callback) {
    if (!options.functionRequireName) {
      callback(null, conf.get(PORTS))
      return
    }

    var args = getArgs(options)

    var nextPortOptions = {
      registeredPorts: conf.get(PORTS),
      basePort: BASE_PORT
    }

    nextPort(nextPortOptions, function (error, port) {
      if (error) {
        callback(error)
        return
      }

      addPort({
        name: options.functionRequireName,
        port: port
      })

      args.push('--port')
      args.push(port)

      var startChildProcessOptions = {
        functionRequireName: options.functionRequireName,
        args: args
      }

      startChildProcess(startChildProcessOptions, callback)
    })
  }

  function startChildProcess (options, callback) {
    var childProcessOptions = {
      silent: false,
      uid: options.functionRequireName,
      args: options.args
    }

    var child = new (forever.Monitor)(serveBinary, childProcessOptions)

    child = configureProcessListeners(child)

    child.on('start', function (info) {
      callback(null, 'done')
    })

    child.start()
  }

  function getArgs (options) {
    var args = [
      'functionInstallName',
      'functionRequireName',
      'endpoint'
    ]

    return args.reduce(function (accumulator, arg) {
      if (options[arg]) {
        accumulator.push('--' + arg)
        accumulator.push(options[arg])
      }

      return accumulator
    }, [])
  }

  function addPort (options) {
    var ports = conf.get(PORTS) || {}

    ports[options.name] = options.port

    conf.set(PORTS, ports)
  }
})()
