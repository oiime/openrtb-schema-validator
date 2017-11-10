'use strict'
const Ajv = require('ajv')
const ajv = new Ajv()

class OpenRTBValidationError extends Error {
  constructor (errors) {
    super('Validation error')
    this.name = this.constructor.name
    this._errors = errors
  }
  get errors () {
    return this._errors
  }
  get errorsText () {
    return ajv.errorsText(this._errors)
  }
  toString () {
    return `OpenRTBValidationError: ${ajv.errorsText(this._errors)}`
  }
}

class OpenRTBParseError extends Error {
  constructor (msg) {
    super(msg)
    this.name = this.constructor.name
  }
}

class OpenRTBUnknownSchemaError extends Error {
  constructor (msg) {
    super(msg)
    this.name = this.constructor.name
  }
}

module.exports = {
  OpenRTBValidationError,
  OpenRTBParseError,
  OpenRTBUnknownSchemaError
}
