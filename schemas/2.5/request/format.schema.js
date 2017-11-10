
module.exports = {
  additionalProperties: false,
  type: 'object',
  properties: {
    w: { type: 'integer' },
    h: { type: 'integer' },
    wratio: { type: 'integer' },
    hratio: { type: 'integer' },
    wmin: { type: 'integer' },
    exp: { type: 'object' }
  }
}
