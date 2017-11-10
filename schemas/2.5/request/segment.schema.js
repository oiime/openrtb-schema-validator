
module.exports = {
  additionalProperties: false,
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    value: { type: 'string' },
    ext: { type: 'object' }
  }
}
