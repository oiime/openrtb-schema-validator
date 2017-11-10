module.exports = {
  additionalProperties: false,
  type: 'object',
  required: ['request'],
  properties: {
    request: { type: 'string' },
    ver: { type: 'string' },
    api: { items: { type: 'integer', enum: [1, 2, 3, 4, 5, 6] } },
    battr: { items: { type: 'integer', enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17] } },
    ext: { type: 'object' }
  }
}
