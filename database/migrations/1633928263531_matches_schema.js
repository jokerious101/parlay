'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MatchesSchema extends Schema {
  up () {
    this.create('matches', (table) => {
        table.increments()
        table.bigInteger('league_id').notNullable()
        table.bigInteger('team_a').notNullable()
        table.bigInteger('team_b').notNullable()
        table.decimal('team_a_totalscore', 16, 2).default(0).notNullable()
        table.decimal('team_b_totalscore', 16, 2).default(0).notNullable()
        table.integer('status', 'ongoing').notNullable()
        table.integer('winner').nullable()
        table.decimal('match_total_overunder', 16, 2).default(0).notNullable()
        table.decimal('total_bet', 16, 2).default(0).notNullable()
        table.timestamps()
    })
  }

  down () {
    this.drop('matches')
  }
}

module.exports = MatchesSchema
