'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Team extends Model {
    static get rulesStore () {
        return {
            'league-id'  : 'required',
            'name'       : 'required|unique:teams',
            'short-name' : 'required'
        }
    }

    static get rulesShow () {
        return {
            id: 'required'
        }
    }

    static get rulesDelete () {
        return {
            id: 'required'
        }
    }
}

module.exports = Team
