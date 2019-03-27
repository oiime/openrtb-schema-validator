const formatSchema = require('./format.schema')

module.exports = {
  additionalProperties: false,
  type: 'object',
  properties: {
    format: { items: formatSchema },
    w: { type: 'integer' },
    h: { type: 'integer' },
    wmax: { type: 'integer' }, // DEPRECATED
    hmax: { type: 'integer' }, // DEPRECATED
    wmin: { type: 'integer' }, // DEPRECATED
    hmin: { type: 'integer' }, // DEPRECATED
    btype: { items: { type: 'integer', enum: [1, 2, 3, 4] } },
    battr: { items: { type: 'integer', enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] } },
    pos: { type: 'integer', enum: [0, 1, 2, 3, 4, 5, 6, 7] },
    mimes: { items: { type: 'string' } },
    topframe: { type: 'integer', enum: [1, 2] },
    expdir: { items: { type: 'integer', enum: [1, 2, 3, 4, 5] } },
    api: { items: { type: 'integer', enum: [1, 2, 3, 4, 5, 6] } },
    id: { type: 'string' },
    vcm: { type: 'integer', enum: [1, 2] },
    ext: { type: 'object' }
  }
}
