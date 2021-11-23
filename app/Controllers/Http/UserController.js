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
            return view.render("login", user);
            // response.send(user);
        } catch (error) {
            response.status(400).send('Server Error');
        }
    }

    async getAll ({ request, response, view }) {
        try {
            const users = await User.all();

            response.send(users);
        } catch (error) {
            response.status(400).send('Server Error');
        }
    }

    async register ({ request, response, view }) {
        try {
            const user = await User.all();
            return view.render("register", user);
            // response.send(user);
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
        console.log('req', request.body)
        try {
            const validation = await validate(request.all(), User.rulesStore);
            console.log('validation', validation)
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
            console.log('error', error)
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

        console.log('paramsss', params)

        try {
            const validation = await validate(request.params, User.rulesShow);
            console.log("auth.user", auth.user)
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
        const username = request.input("username")
        const password = request.input("password");
        try {
            if (await auth.attempt(username, password)) {
                let user = await User.findBy('username', username)
                let accessToken = await auth.generate(user,
                     {expiresIn: '30mins',
                        type: 'bearer'
                    })
                user.token = accessToken;

                return response.json({
                    success: true, 
                    user:user, 
                    access_token: accessToken})
              }
        } catch(error) {
            console.log('error', error)
            response.status(400).send({
                success: false,
                message:"Invalid Credentials"
            })
            return
        }
    }
}

module.exports = UserController
