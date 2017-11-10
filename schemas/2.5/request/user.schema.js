'use strict'
const geoSchema = require('./geo.schema')
const dataSchema = require('./data.schema')

module.exports = {
  additionalProperties: false,
  type: 'object',
  properties: {
    id: { type: 'string' },
    buyeruid: { type: 'string' },
    yob: { type: 'integer' },
    gender: { type: 'string', enum: ['M', 'F', 'O'] },
    keywords: { type: 'string' },
    customdata: { type: 'string' },
    geo: geoSchema,
    data: { items: dataSchema },
    ext: { type: 'object' }
  }
}
