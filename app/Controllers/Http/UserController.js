'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const { validate } = use('Validator')
const User         = use('App/Models/User');

/**
 * Resourceful controller for interacting with users
 */
class UserController {
    /**
     * Show a list of all users.
     * GET users
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index ({ request, response, view }) {
        try {
            const user = await User.all();

            response.send(user);
        } catch (error) {
            response.status(400).send('Server Error');
        }
    }

    /**
     * Render a form to be used for creating a new user.
     * GET users/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create ({ request, response, view }) {
    }

    /**
     * Create/save a new user.
     * POST users
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store ({ request, response }) {
        try {
            const validation = await validate(request.all(), User.rulesStore);

            if (!validation.fails()) {
                const data = request.only([
                    'username', 'email', 'password'
                ]);

                const user = await User.create(data);

                response.send(user);
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    /**
     * Display a single user.
     * GET users/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show ({ auth, params, request, response }) {
        // if (auth.user.id !== Number(params.id)) {
        //     return "You cannot see someone else's profile"
        // }
        // return auth.user

        try {
            const validation = await validate(request.params, User.rulesShow);

            if (!validation.fails()) {
                const user = await User.find(request.params.id);

                response.send(user);
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    /**
     * Render a form to update an existing user.
     * GET users/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit ({ params, request, response, view }) {
    }

    /**
     * Update user details.
     * PUT or PATCH users/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update ({ auth, params, request, response }) {
        try {
            const validation = await validate(request.params, User.rulesUpdate);

            if (!validation.fails()) {
                const data = request.only([
                    'username', 'email', 'password', 'role', 'credits'
                ]);

                const user = await User.query()
                    .where("id", request.params.id)
                    .update(data);

                response.send(user);
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            console.log("xxxx")
            response.status(400).send(error.message);
        }
    }

    /**
     * Delete a user with id.
     * DELETE users/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy ({ params, request, response }) {
        try {
            const validation = await validate(request.params, User.rulesDelete);

            if (!validation.fails()) {
                const user = await User.find(request.params.id);

                if (!!user) {
                    const isDeleted = await user.delete();

                    response.send(user);
                } else {
                    response.status(400).send("User not found.");
                }
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    async login ({ auth, request, response }) {
        try {
            const { username, password } = request.all();
            const user                   = await auth.attempt(username, password);

            response.send(user);
        } catch(error) {
            response.status(400).send(error.message);
        }
    }
}

module.exports = UserController
