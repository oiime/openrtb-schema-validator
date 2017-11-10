'use strict'

module.exports = {
  additionalProperties: false,
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    cat: { items: { type: 'string' } },
    domain: { type: 'string' },
    ext: { type: 'object' }
  }
}
