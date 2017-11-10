/* eslint-env node, mocha */
const { expect } = require('chai')
const { parser, schemas } = require('../src')

const basePayload = {
  id: '1',
  test: 0,
  imp: [
    {
      id: '7'
    }
  ]
}

function duplicate (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function baseCompare (requestParser, origin, done) {
  const payload = requestParser.open(origin)
  if (!payload.validate()) {
    return done(payload.error)
  }
  expect(payload.root).to.deep.equal(basePayload)
  done()
}

describe('2.5 request', function () {
  it('should validate correct payload', function (done) {
    baseCompare(parser(schemas.request['2.5']), duplicate(basePayload), done)
  })

  it('should coerce payload correctly', function (done) {
    const origin = duplicate(basePayload)
    origin.test = '0'

    baseCompare(parser(schemas.request['2.5'], {
      coerceTypes: true
    }), origin, done)
  })

  it('should reject additional properties', function (done) {
    const origin = duplicate(basePayload)
    origin.foo = 'bar'

    baseCompare(parser(schemas.request['2.5'], {
      removeAdditional: false,
      coerceTypes: true
    }), origin, err => {
      expect(err._errors[0].params.additionalProperty).to.equal('foo')
      done()
    })
  })

  it('should remove additional properties', function (done) {
    const origin = duplicate(basePayload)
    origin.foo = 'bar'

    baseCompare(parser(schemas.request['2.5'], {
      removeAdditional: true
    }), origin, done)
  })

  it('should allow registering schema modifications', function (done) {
    const schema = schemas.request['2.5'].clone()
    schema.root.properties.foo = { type: 'string' }
    const requestParser = parser(schema)

    const origin = duplicate(basePayload)
    origin.foo = 'bar'
    const { error, data } = requestParser.validate(origin)
    if (error) return done(error)
    expect(data).to.deep.equal(origin)
    done()
  })
})
