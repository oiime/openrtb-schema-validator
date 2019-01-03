const bidSchema = require('./bid.schema')

module.exports = {
  additionalProperties: false,
  type: 'object',
  required: ['bid'],
  properties: {
    bid: { items: bidSchema },
    seat: { type: 'string' },
    group: { type: 'integer', enum: [0, 1], default: 0 },
    ext: { type: 'object' }
  }
}
