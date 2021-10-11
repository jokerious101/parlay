'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LeaguesSchema extends Schema {
  up () {
    this.create('leagues', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('description', 500).notNullable()
      table.string('image', 100).nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('leagues')
  }
}

module.exports = LeaguesSchema
