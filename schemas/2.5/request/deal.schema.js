const ISO4217 = require('../../../json/iso_4217.json')

module.exports = {
  additionalProperties: false,
  type: 'object',
  required: ['id'],
  properties: {
    id: { type: 'string' },
    bidfloor: { type: 'number', minimum: 0, default: 0 },
    bidfloorcur: { type: 'string', enum: ISO4217, default: 'USD' },
    at: { type: 'integer', enum: [1, 2, 3] },
    wseat: { items: { type: 'string' } },
    wadomain: { items: { type: 'string' } },
    ext: { type: 'object' }
  }
}
