'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class League extends Model {
    static get rulesShow () {
        return {
            id: 'required'
        }
    }

    static get rulesStore () {
        return {
            name       : 'required|unique:leagues',
            description: 'required'
        }
    }

    static get rulesUpdate() {
        return {
            name       : `required|unique:leagues`,
            description: 'required'
        }
    }

    static get rulesDelete () {
        return {
            id: 'required'
        }
    }
}

module.exports = League
