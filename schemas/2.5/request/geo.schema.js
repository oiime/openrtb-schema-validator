const ISO_3166_1_ALPHA3 = require('../../../json/iso_3166-1_alpha-3.json')

module.exports = {
  additionalProperties: false,
  type: 'object',
  properties: {
    lat: { type: 'number' },
    lon: { type: 'number' },
    type: { type: 'integer', enum: [1, 2, 3] },
    accuracy: { type: 'integer' },
    lastfix: { type: 'integer' },
    ipservice: { type: 'integer' },
    country: { type: 'string', enum: ISO_3166_1_ALPHA3 },
    region: { type: 'string' },
    regionfips104: { type: 'string' },
    metro: { type: 'string' },
    city: { type: 'string' },
    zip: { type: 'string' },
    utcoffset: { type: 'integer' },
    ext: { type: 'object' }
  }
}
