const bannerSchema = require('./banner.schema')

module.exports = {
  additionalProperties: false,
  type: 'object',
  required: ['mimes'],
  properties: {
    mimes: { items: { type: 'string' } },
    minduration: { type: 'integer' },
    maxduration: { type: 'integer' },
    protocols: { items: { type: 'integer', enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] } },
    startdelay: { type: 'integer' },
    sequence: { type: 'integer' },
    battr: { type: 'integer', enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] },
    maxextended: { type: 'integer' },
    minbitrate: { type: 'integer' },
    maxbitrate: { type: 'integer' },
    delivery: { items: { type: 'integer', enum: [1, 2, 3] } },
    companionad: { items: bannerSchema },
    api: { items: { type: 'integer', enum: [1, 2, 3, 4, 5, 6] } },
    companiontype: { items: { type: 'integer', enum: [1, 2, 3] } },
    maxseq: { type: 'integer' },
    feed: { type: 'integer', enum: [1, 2, 3] },
    stitched: { type: 'integer', enum: [1, 2] },
    nvol: { items: { type: 'integer', enum: [0, 1, 2, 3, 4] } },
    ext: { type: 'object' }
  }
}
