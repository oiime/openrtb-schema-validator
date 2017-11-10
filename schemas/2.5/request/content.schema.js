'use strict'
const dataSchema = require('./data.schema')
const producerSchema = require('./producer.schema')

module.exports = {
  additionalProperties: false,
  type: 'object',
  properties: {
    id: { type: 'string' },
    episode: { type: 'integer' },
    title: { type: 'string' },
    series: { type: 'string' },
    season: { type: 'string' },
    artist: { type: 'string' },
    genre: { type: 'string' },
    album: { type: 'string' },
    isrc: { type: 'string' },
    producer: producerSchema,
    url: { type: 'string' },
    cat: { items: { type: 'string' } },
    prodq: { type: 'integer', enum: [1, 2, 3, 4] },
    videoquality: { type: 'integer', enum: [0, 1, 2, 3] }, // DEPRECATED
    context: { type: 'integer', enum: [1, 2, 3, 4, 5, 6, 7] },
    contentrating: { type: 'string' },
    userrating: { type: 'string' },
    qagmediarating: { type: 'integer', enum: [1, 2, 3] },
    keywords: { type: 'string' },
    livestream: { type: 'integer', enum: [1, 2] },
    sourcerelationship: { type: 'integer', enum: [1, 2] },
    len: { type: 'integer' },
    language: { type: 'string' },
    embeddable: { type: 'integer', enum: [1, 2] },
    data: { items: dataSchema },
    ext: { type: 'object' }
  }
}
