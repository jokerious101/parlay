'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const { validate } = use('Validator')
const Bet       = use('App/Models/Bet');

/**
 * Resourceful controller for interacting with bets
 */
class BetController {
    /**
     * Show a list of all bets.
     * GET bets
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index ({ request, response, view }) {
        try {
            const bet = await Bet.all();

            response.send(bet);
        } catch (error) {
            response.status(400).send('Server Error');
        }
    }

    /**
     * Render a form to be used for creating a new bet.
     * GET bets/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create ({ request, response, view }) {
    }

    /**
     * Create/save a new bet.
     * POST bets
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store ({ request, response }) {
        try {
            const validation = await validate(request.all(), Bet.rulesStore);

            if (!validation.fails()) {
                const data = request.only([
                    'user_id', 'league_id', 'match_id', 'team_id', 'amount', 'gains'
                ]);

                const bet = await Bet.create(data);

                response.send(bet);
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    /**
     * Display a single bet.
     * GET bets/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show ({ params, request, response, view }) {
        try {
            const validation = await validate(request.params, Bet.rulesShow);

            if (!validation.fails()) {
                const bet = await Bet.find(request.params.id);

                response.send(bet);
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    /**
     * Render a form to update an existing bet.
     * GET bets/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit ({ params, request, response, view }) {
        console.log('fff')
    }

    /**
     * Update bet details.
     * PUT or PATCH bets/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update ({ params, request, response }) {
        try {
            const validation = await validate(request.params, Bet.rulesShow);

            if (!validation.fails()) {
                const data = request.only([
                    'user_id', 'league_id', 'match_id', 'team_id', 'amount', 'gains'
                ]);

                const bet = await Bet.query()
                    .where("id", request.params.id)
                    .update(data);

                response.send(bet);
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }

    /**
     * Delete a bet with id.
     * DELETE bets/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy ({ params, request, response }) {
        try {
            const validation = await validate(request.params, Bet.rulesDelete);

            if (!validation.fails()) {
                const bet = await Bet.find(request.params.id);

                if (!!bet) {
                    const isDeleted = await bet.delete();

                    response.send(bet);
                } else {
                    response.status(400).send("Bet not found.");
                }
            } else {
                response.status(400).send(validation.messages());
            }
        } catch (error) {
            response.status(400).send(error.message);
        }
    }
}

module.exports = BetController
