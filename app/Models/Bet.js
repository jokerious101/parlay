'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bet extends Model {
    static get rulesShow () {
        return {
            id: 'required'
        }
    }

    static get rulesStore () {
        return {
            user_id  : 'required',
            league_id: 'required',
            match_id : 'required',
            team_id  : 'required',
            amount   : 'required|number',
            gains    : 'number'
        }
    }

    static get rulesDelete () {
        return {
            id: 'required'
        }
    }
}

module.exports = Bet
