## about

`openrtb-schema-validator` is a simple thin layer on top of ajv that validates openrtb request and responess, it supports multiple schemas

## installation
```bash
npm install --save openrtb-schema-validator
```

## by example

#### validate a request
```javascript
const { parser, schemas } = require('openrtb-schema-validator')

const requestValidator = parser(schemas.request['2.5'], { removeAdditional: true })

const { error, data } = requestValidator.validate({
  id: '1',
  imp: [{ id: '1' }]
})

if (error) {
  console.error(error)
}
cosole.log(data)
```

#### validate a response
```javascript
const { parser, schemas } = require('openrtb-schema-validator')

const responseValidator = parser(schemas.response['2.5'], { removeAdditional: true })

const { error, data } = responseValidator.validate({
  id: '1',
  seatbid: {
    bid: []
  }
})
```

#### modify a schema
```javascript
const { parser, schemas } = require('openrtb-schema-validator')

const schema = schemas.request['2.5'].clone()
schema.root.properties.foo = { type: 'string' }

const requestValidator = parser(schema, { removeAdditional: true })

const { error, data } = requestValidator.validate({
  id: '1',
  foo: 'bar',
  seatbid: {
    bid: []
  }
})
```

## API

#### parser(schema, { emitErrors, removeAdditional, coerceTypes, useDefaults })

* schema - an object of type Schema
* options
  * emitErrors - boolean, if set the parser object would emit events of type `error` whenever validation failed
  * removeAdditional - if there are properties not set in the schema, they would be removed, otherwise validation would failed (from ajv)
  * coerceTypes - force types into data, eg: if a property is defined as string but an integer is provided, that property would be coerced into a string (from ajv)
  * useDefaults - allow defaults values in the schema (from ajv)

#### schemas[]
  * request['2.5']
  * response['2.5']


## benchmarks

* validation only: 100000 calls in 172ms
* validation and coerceTypes: 100000 calls in 167ms
* with payload: 179ms
* with payload and coerceTypes: 100000 calls in 179ms
* with payload and removeAdditional: 100000 calls in 177ms

License: MIT
