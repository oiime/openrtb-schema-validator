'use strict'
const segmentSchema = require('./segment.schema')

module.exports = {
  additionalProperties: false,
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    segment: { items: segmentSchema },
    ext: { type: 'object' }
  }
}
