
module.exports = {
  additionalProperties: false,
  type: 'object',
  properties: {
    fd: { type: 'integer', enum: [1, 2] },
    tid: { type: 'string' },
    pchain: { type: 'string' },
    ext: { type: 'object' }
  }
}
