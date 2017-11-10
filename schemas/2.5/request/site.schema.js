'use strict'
const publisherSchema = require('./publisher.schema')
const contentSchema = require('./content.schema')

module.exports = {
  additionalProperties: false,
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    domain: { type: 'string' },
    cat: { items: { type: 'string' } },
    sectioncat: { items: { type: 'string' } },
    pagecat: { items: { type: 'string' } },
    page: { type: 'string' },
    ref: { type: 'string' },
    search: { type: 'string' },
    mobile: { type: 'integer', enum: [1, 2] },
    privacypolicy: { type: 'integer', enum: [1, 2] },
    publisher: publisherSchema,
    content: contentSchema,
    keywords: { type: 'string' },
    ext: { type: 'object' }
  }
}
