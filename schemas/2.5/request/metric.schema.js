'use strict'

module.exports = {
  additionalProperties: false,
  type: 'object',
  required: ['type', 'value'],
  properties: {
    type: { type: 'string' },
    value: { type: 'number' },
    vendor: { type: 'string' },
    ext: { type: 'object' }
  }
}
