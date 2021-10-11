'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Match extends Model {
    static get table () {
        return 'matches';
    }

    static get rulesStore () {
        return {
            'league-id': 'required',
            'team-a': 'required',
            'team-b': 'required'
        }
    }

    static get rulesShow () {
        return {
            id: 'required'
        }
    }

    static get rulesUpdate () {
        return {
            'league_id'            : 'required',
            'team_a'               : 'required',
            'team_b'               : 'required',
            'team_a_totalscore'    : 'number',
            'team_b_totalscore'    : 'number',
            'status'               : 'integer',
            'winner'               : 'integer',
            'match_total_overunder': 'number',
            'total_bet'            : 'number'
        }
    }

    static get rulesDelete () {
        return {
            id: 'required'
        }
    }
}

module.exports = Match
