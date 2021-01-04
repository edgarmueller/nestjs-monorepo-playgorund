
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib-example-a.cjs.production.min.js')
} else {
  module.exports = require('./lib-example-a.cjs.development.js')
}
