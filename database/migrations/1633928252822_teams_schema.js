'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeamsSchema extends Schema {
  up () {
    this.create('teams', (table) => {
        table.increments()
        table.bigInteger('league_id').notNullable()
        table.string('name', 500).notNullable()
        table.string('short_name', 500).notNullable()
        table.string('image', 1000).nullable()
        table.timestamps()
    })
  }

  down () {
    this.drop('teams')
  }
}

module.exports = TeamsSchema
