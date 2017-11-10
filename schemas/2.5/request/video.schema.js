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
    protocol: { type: 'integer', enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }, // DEPRECATED
    w: { type: 'integer' },
    h: { type: 'integer' },
    startdelay: { type: 'integer' },
    placement: { type: 'integer', enum: [1, 2, 3, 4, 5] },
    linearity: { type: 'integer', enum: [1, 2] },
    skip: { type: 'integer', enum: [0, 1] },
    skipmin: { type: 'integer', default: 0 },
    skipafter: { type: 'integer', default: 0 },
    sequence: { type: 'integer' },
    battr: { items: { type: 'integer', enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] } },
    maxextended: { type: 'integer' },
    minbitrate: { type: 'integer' },
    maxbitrate: { type: 'integer' },
    boxingallowed: { type: 'integer', enum: [0, 1], default: 1 },
    playbackmethod: { items: { type: 'integer', enum: [1, 2, 3, 4, 5, 6] } },
    playbackend: { type: 'integer', enum: [1, 2, 3] },
    delivery: { items: { type: 'integer', enum: [1, 2, 3] } },
    pos: { type: 'integer', enum: [0, 1, 2, 3, 4, 5, 6, 7] },
    companionad: { items: bannerSchema },
    api: { items: { type: 'integer', enum: [1, 2, 3, 4, 5, 6] } },
    companiontype: { items: { type: 'integer', enum: [1, 2, 3] } },
    ext: { type: 'object' }
  }
}
