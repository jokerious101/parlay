'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {
    static get hidden () {
        return ['password']
    }

    static boot () {
        super.boot()

        /**
         * A hook to hash the user password before saving
         * it to the database.
         */
        this.addHook('beforeSave', async (userInstance) => {
            if (userInstance.dirty.password) {
                userInstance.password = await Hash.make(userInstance.password)
            }
        })
    }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
    tokens () {
        return this.hasMany('App/Models/Token')
    }

    static get rulesStore () {
        return {
            'username': 'required|unique:users,username',
            'email'   : 'required|email|unique:users,email',
            'password': 'required'
        }
    }

    static get rulesShow () {
        return {
            id: 'required'
        }
    }

    static get rulesUpdate () {
        return {
            'username': 'unique:users,username',
            'email'   : 'email|unique:users,email',
            'credits' : 'number',
        }
    }

    static get rulesDelete () {
        return {
            id: 'required'
        }
    }
}

module.exports = User
