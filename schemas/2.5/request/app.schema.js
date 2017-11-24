'use strict'
const publisherSchema = require('./publisher.schema')
const contentSchema = require('./content.schema')

module.exports = {
  additionalProperties: false,
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    bundle: { type: 'string' },
    domain: { type: 'string' },
    storeurl: { type: 'string' },
    cat: { items: { type: 'string' } },
    sectioncat: { items: { type: 'string' } },
    pagecat: { items: { type: 'string' } },
    ver: { type: 'string' },
    privacypolicy: { type: 'integer', enum: [0, 1] },
    paid: { type: 'integer', enum: [0, 1] },
    publisher: publisherSchema,
    content: contentSchema,
    keywords: { type: 'string' },
    ext: { type: 'object' }
  }
}
