'use strict'

class Schema {
  constructor (root) {
    this.__root = root
  }
  clone () {
    return new Schema(JSON.parse(JSON.stringify(this.root)))
  }
  get root () {
    return this.__root
  }
}

module.exports = Schema
