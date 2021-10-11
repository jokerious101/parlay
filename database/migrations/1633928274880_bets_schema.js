'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BetsSchema extends Schema {
  up () {
    this.create('bets', (table) => {
        table.increments()
        table.bigInteger('user_id').notNullable()
        table.bigInteger('league_id').notNullable()
        table.bigInteger('match_id').notNullable()
        table.bigInteger('team_id').notNullable()
        table.decimal('amount', 16, 2).default(0).notNullable()
        table.decimal('gains', 16, 2).default(0).notNullable()
        table.timestamps()
    })
  }

  down () {
    this.drop('bets')
  }
}

module.exports = BetsSchema
