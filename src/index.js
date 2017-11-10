'use strict'
const fs = require('fs')
const path = require('path')
const Parser = require('./parser')
const Schema = require('./schema')
const { OpenRTBUnknownSchemaError } = require('./errors')

function schemaProxy (type) {
  return {
    get: function (schemas, name) {
      if (name in schemas) return schemas[name]
      const schemaPath = path.join(__dirname, '..', 'schemas', name, type)
      if (!fs.existsSync(schemaPath)) throw new OpenRTBUnknownSchemaError(name)
      schemas[name] = new Schema(require(schemaPath))
      return schemas[name]
    },
    set: function (schemas, name, value) {
      schemas[name] = value
    }
  }
}

module.exports = {
  parser: (schema, opt) => { return new Parser(schema, opt) },
  schemas: {
    request: new Proxy({}, schemaProxy('request')),
    response: new Proxy({}, schemaProxy('response'))
  },
  Schema: Schema
}
