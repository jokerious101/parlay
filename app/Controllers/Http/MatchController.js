'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const { validate } = use('Validator')
const Match        = use('App/Models/Match');

/**
 * Resourceful controller for interacting with matches
 */
class MatchController {
    /**
     * Show a list of all matches.
     * GET matches
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index ({ request, response, view }) {
        try {
            const matches = await Match.all();

            response.send(matches);
        } catch (error) {
            response.status(400).send('Server Error');
        }
    }

    /**
     * Render a form to be used for creating a new match.
     * GET matches/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create ({ request, response, view }) {
    }

    /**
     * Create/save a new match.
     * POST matches
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        try {
            const validation = await validate(request.all(), Match.rulesStore);

            if (!validation.fails()) {
                const data = {
                    league_id: request.input('league-id'),
                    team_a   : request.input('team-a'),
                    team_b   : request.input('team-b')
                }

                const match = await Match.create(data);

                response.send(match);
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    /**
     * Display a single match.
     * GET matches/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        try {
            const validation = await validate(request.params, Match.rulesShow);

            if (!validation.fails()) {
                const match = await Match.find(request.params.id);

                response.send(match);
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    /**
     * Render a form to update an existing match.
     * GET matches/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit ({ params, request, response, view }) {
    }

    /**
     * Update match details.
     * PUT or PATCH matches/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        try {
            const validation = await validate(request.all(), Match.rulesUpdate);

            if (!validation.fails()) {
                const match = await Match.query()
                    .where("id", request.params.id)
                    .update(
                        request.only(
                            'league_id',
                            'team_a',
                            'team_b',
                            'team_a_totalscore',
                            'team_b_totalscore',
                            'status',
                            'winner',
                            'match_total_overunder',
                            'total_bet'
                        )
                    )

                response.send(match);
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    /**
     * Delete a match with id.
     * DELETE matches/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        try {
            const validation = await validate(request.params, Match.rulesDelete);

            if (!validation.fails()) {
                const match = await Match.find(request.params.id);

                if (!!match) {
                    const isDeleted = await match.delete();

                    response.send(match);
                } else {
                    response.status(400).send("Match not found.");
                }
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }
}

module.exports = MatchController
