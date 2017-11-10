'use strict'
const geoSchema = require('./geo.schema')

module.exports = {
  additionalProperties: false,
  type: 'object',
  properties: {
    ua: { type: 'string' },
    geo: geoSchema,
    dnt: { type: 'integer', enum: [0, 1] },
    lmt: { type: 'integer', enum: [0, 1] },
    ip: { anyOf: [{ type: 'string', format: 'ipv4' }, { type: 'string', format: 'ipv6' }] },
    ipv6: { type: 'string', format: 'ipv6' },
    devicetype: { type: 'integer', enum: [1, 2, 3, 4, 5, 6, 7] },
    make: { type: 'string' },
    model: { type: 'string' },
    os: { type: 'string' },
    osv: { type: 'string' },
    hwv: { type: 'string' },
    h: { type: 'integer' },
    w: { type: 'integer' },
    ppi: { type: 'integer' },
    pxratio: { type: 'number' },
    js: { type: 'integer', enum: [0, 1] },
    geofetch: { type: 'integer', enum: [0, 1] },
    flashver: { type: 'string' },
    language: { type: 'string' },
    carrier: { type: 'string' },
    mccmnc: { type: 'string' },
    connectiontype: { type: 'integer', enum: [0, 1, 2, 3, 4, 5, 6] },
    ifa: { type: 'string' },
    didsha1: { type: 'string' },
    didmd5: { type: 'string' },
    dpidsha1: { type: 'string' },
    dpidmd5: { type: 'string' },
    macsha1: { type: 'string' },
    macmd5: { type: 'string' },
    ext: { type: 'object' }
  }
}
