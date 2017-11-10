
module.exports = {
  additionalProperties: false,
  type: 'object',
  properties: {
    coppa: { type: 'integer', enum: [0, 1] },
    ext: { type: 'object' }
  }
}
