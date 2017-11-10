'use strict'
const dealSchema = require('./deal.schema')

module.exports = {
  additionalProperties: false,
  type: 'object',
  properties: {
    private_auction: { type: 'integer', default: 0, enum: [0, 1] },
    deals: { items: dealSchema },
    ext: { type: 'object' }
  }
}
