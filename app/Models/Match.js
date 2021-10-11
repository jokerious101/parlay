'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Match extends Model {
    static get table () {
        return 'matches';
    }
}

module.exports = Match
