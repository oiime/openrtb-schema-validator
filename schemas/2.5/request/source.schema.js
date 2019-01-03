
module.exports = {
  additionalProperties: false,
  type: 'object',
  properties: {
    fd: { type: 'integer', enum: [0, 1] },
    tid: { type: 'string' },
    pchain: { type: 'string' },
    ext: { type: 'object' }
  }
}
