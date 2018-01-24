'use strict'
const metricSchema = require('./metric.schema')
const bannerSchema = require('./banner.schema')
const videoSchema = require('./video.schema')
const audioSchema = require('./audio.schema')
const nativeSchema = require('./native.schema')
const pmpSchema = require('./pmp.schema')

const ISO4217 = require('../../../json/iso_4217.json')

module.exports = {
  additionalProperties: false,
  type: 'object',
  required: ['id'],
  properties: {
    id: { type: 'string' },
    metric: { items: metricSchema },
    banner: bannerSchema,
    video: videoSchema,
    audio: audioSchema,
    native: nativeSchema,
    pmp: pmpSchema,
    displaymanager: { type: 'string' },
    displaymanagerver: { type: 'string' },
    instl: { type: 'integer', enum: [0, 1], default: 0 },
    tagid: { type: 'string' },
    bidfloor: { type: 'number', minimum: 0, default: 0 },
    bidfloorcur: { type: 'string', enum: ISO4217, default: 'USD' },
    clickbrowser: { type: 'integer', enum: [0, 1] },
    secure: { type: 'integer', enum: [0, 1] },
    iframebuster: { items: { type: 'string' } },
    exp: { type: 'integer' },
    ext: { type: 'object' }
  }
}
