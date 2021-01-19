'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://127.0.0.1:8843/api"',
  HOST: '"http://127.0.0.1"',
  PORT: "8081"
})
