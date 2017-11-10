'use strict'
const impSchema = require('./imp.schema')
const siteSchema = require('./site.schema')
const appSchema = require('./app.schema')
const userSchema = require('./user.schema')
const deviceSchema = require('./device.schema')
const sourceSchema = require('./source.schema')
const regsSchema = require('./regs.schema')

const ISO4217 = require('../../../json/iso_4217.json')

module.exports = {
  additionalProperties: false,
  type: 'object',
  required: ['id', 'imp'],
  properties: {
    id: { type: 'string' },
    imp: { items: impSchema, minItems: 1 },
    site: siteSchema,
    app: appSchema,
    device: deviceSchema,
    user: userSchema,
    test: { type: 'integer', enum: [0, 1] },
    at: { type: 'integer' },
    tmax: { type: 'integer' },
    wseat: { items: { type: 'string' } },
    bseat: { items: { type: 'string' } },
    allimps: { type: 'integer', enum: [0, 1] },
    cur: { items: { type: 'string', enum: ISO4217 } },
    wlang: { items: { type: 'string' } },
    bcat: { items: { type: 'string' } },
    badv: { items: { type: 'string' } },
    bapp: { items: { type: 'string' } },
    source: sourceSchema,
    regs: regsSchema,
    ext: { type: 'object' }
  }
}
