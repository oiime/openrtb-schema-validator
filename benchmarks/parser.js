'use strict'

const { parser, schemas } = require('../src')

const requestData = {
  id: '1',
  test: 0,
  imp: [
    {
      id: '7'
    }
  ]
}

function runParserPayload (parser, data, events, done) {
  let ts = new Date().getTime()

  for (let i = 1; i <= events; i++) {
    let payload = parser.open(data)
    if (!payload.validate()) throw payload.error
  }

  done({
    time: new Date().getTime() - ts,
    events
  })
}

function runParserValidate (parser, data, events, done) {
  let ts = new Date().getTime()

  for (let i = 1; i <= events; i++) {
    let { error } = parser.validate(data)
    if (error) throw error
  }

  done({
    time: new Date().getTime() - ts,
    events
  })
}

runParserValidate(parser(schemas.request['2.5']), requestData, 100000, ({ time, events }) => {
  console.log(`validation only: ${events} calls in ${time}ms`)
})

runParserValidate(parser(schemas.request['2.5'], { coerceTypes: true }), requestData, 100000, ({ time, events }) => {
  console.log(`validation and coerceTypes: ${events} calls in ${time}ms`)
})

runParserPayload(parser(schemas.request['2.5']), requestData, 100000, ({ time, events }) => {
  console.log(`with payload: ${time}ms`)
})

runParserPayload(parser(schemas.request['2.5'], { coerceTypes: true }), requestData, 100000, ({ time, events }) => {
  console.log(`with payload and coerceTypes: ${events} calls in ${time}ms`)
})

runParserPayload(parser(schemas.request['2.5'], { removeAdditional: true }), requestData, 100000, ({ time, events }) => {
  console.log(`with payload and removeAdditional: ${events} calls in ${time}ms`)
})

process.exit(0)
