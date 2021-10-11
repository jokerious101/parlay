'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const { validate } = use('Validator')
const League       = use('App/Models/League');

/**
 * Resourceful controller for interacting with leagues
 */
class LeagueController {
    /**
     * Show a list of all leagues.
     * GET leagues
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index ({ request, response, view }) {
        try {
            const leagues = await League.all();

            response.send(leagues);
        } catch (error) {
            response.status(400).send('Server Error');
        }
    }

    /**
     * Render a form to be used for creating a new league.
     * GET leagues/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create ({ request, response, view }) {

    }

    /**
     * Create/save a new league.
     * POST leagues
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        try {
            const validation = await validate(request.all(), League.rulesStore);

            if (!validation.fails()) {
                const data = {
                    name: request.input('name'),
                    description: request.input('description')
                }

                const league = await League.create(data);

                response.send(league);
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    /**
     * Display a single league.
     * GET leagues/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        try {
            const validation = await validate(request.params, League.rulesShow);

            if (!validation.fails()) {
                const league = await League.find(request.params.id);

                response.send(league);
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    /**
     * Render a form to update an existing league.
     * GET leagues/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit ({ params, request, response, view }) {
    }

    /**
     * Update league details.
     * PUT or PATCH leagues/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        try {
            const rule = {
                name       : `required|unique:leagues,id,${request.params.id}`,
                description: 'required'
            }

            const validation = await validate(request.all(), rule);

            if (!validation.fails()) {
                const league = await League.query()
                    .where("id", request.params.id)
                    .update({
                        name: request.input('name'),
                        description: request.input('description')
                    })

                response.send(league);
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    /**
     * Delete a league with id.
     * DELETE leagues/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        try {
            const validation = await validate(request.params, League.rulesDelete);

            if (!validation.fails()) {
                const league = await League.find(request.params.id);

                if (!!league) {
                    const isDeleted = await league.delete();

                    response.send(league);
                } else {
                    response.status(400).send("League not found.");
                }
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }
}

module.exports = LeagueController
