'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const { validate } = use('Validator')
const Team         = use('App/Models/Team');

/**
 * Resourceful controller for interacting with teams
 */
class TeamController {
    /**
     * Show a list of all teams.
     * GET teams
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index ({ request, response, view }) {
        try {
            const teams = await Team.all();

            response.send(teams);
        } catch (error) {
            response.status(400).send('Server Error');
        }
    }

    /**
     * Render a form to be used for creating a new team.
     * GET teams/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create ({ request, response, view }) {
        console.log('xxx')
    }

    /**
     * Create/save a new team.
     * POST teams
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store ({ request, response }) {
        try {
            const validation = await validate(request.all(), Team.rulesStore);

            if (!validation.fails()) {
                const data = {
                    league_id : request.input('league-id'),
                    name      : request.input('name'),
                    short_name: request.input('short-name')
                }

                const team = await Team.create(data);

                response.send(team);
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    /**
     * Display a single team.
     * GET teams/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show ({ params, request, response, view }) {
        try {
            const validation = await validate(request.params, Team.rulesShow);

            if (!validation.fails()) {
                const team = await Team.find(request.params.id);

                response.send(team);
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    /**
     * Render a form to update an existing team.
     * GET teams/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit ({ params, request, response, view }) {
        console.log('xxx')
    }

    /**
     * Update team details.
     * PUT or PATCH teams/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update ({ params, request, response }) {
        try {
            const rule = {
                'league-id' : 'required',
                'name'      : `required|unique:teams,id,${request.params.id}`,
                'short-name': 'required'
            }

            const validation = await validate(request.all(), rule);

            if (!validation.fails()) {
                const team = await Team.query()
                    .where("id", request.params.id)
                    .update({
                        league_id : request.input('league-id'),
                        name      : request.input('name'),
                        short_name: request.input('short-name')
                    })

                response.send(team);
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    /**
     * Delete a team with id.
     * DELETE teams/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy ({ params, request, response }) {
        try {
            const validation = await validate(request.params, Team.rulesDelete);

            if (!validation.fails()) {
                const team = await Team.find(request.params.id);

                if (!!team) {
                    const isDeleted = await team.delete();

                    response.send(team);
                } else {
                    response.status(400).send("Team not found.");
                }
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }
}

module.exports = TeamController
