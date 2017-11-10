'use strict'

/**
 * Generates a payload prototype for this specific parser(schema)
 */

function buildPayloadPrototype (parser) {
  const Payload = class {
    constructor (root) {
      this._root = root || {}
    }
    clone () {
      return new Payload(JSON.parse(JSON.stringify(this._root)))
    }
    toJSON () {
      return this._root
    }
    validate () {
      const { error, data } = parser.validate(this._root)
      if (error) {
        this._error = error
        return false
      }
      // we overwrite our root with the new data (for coercing), although it's the same PJO anyway
      this._root = data
      return true
    }
    get error () {
      return this._error
    }
    get root () {
      return this._root
    }
  }

  // allow getters/setters for direct schema, slightly slower than assigngin to the PJO
  for (let prop of Object.keys(parser.schema.root.properties)) {
    Object.defineProperty(Payload.prototype, prop, {
      enumerable: true,
      get: function () {
        return this._root[prop]
      },
      set: function (value) {
        this._root[prop] = value
      }
    })
  }

  return Payload
}

module.exports = {
  buildPayloadPrototype
}
