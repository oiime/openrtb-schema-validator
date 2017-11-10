const seatbidSchema = require('./seatbid.schema')

const ISO4217 = require('../../../json/iso_4217.json')

module.exports = {
  additionalProperties: false,
  type: 'object',
  required: ['id'],
  properties: {
    id: { type: 'string' },
    seatbid: { items: seatbidSchema },
    bidid: { type: 'string' },
    cur: { type: 'string', default: 'USD', enum: ISO4217 },
    customdata: { type: 'string' },
    nbr: { items: { type: 'integer', enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] } },
    ext: { type: 'object' }
  }
}
