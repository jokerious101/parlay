'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const { validate } = use('Validator')
const Match        = use('App/Models/Match');
const puppeteer    = require('puppeteer');

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

    async crawlMatches ({ params, request, response }) {
        try {
            let   result  = [];
            const data = {
                link: request.input('link')
            }
            // let   url     = "https://www.bet365.com/?fbclid=IwAR04pasK4DRMGktOS16rBe-C0RLhjKTcejjyurKuvF6-nMhM9BBqiKDDCg0#/AC/B18/C20604387/D48/E1453/F10/";
            const browser = await puppeteer.launch({
                headless: false,
                timeout: 0
            });
            const page    = await browser.newPage();

            await page.goto(data.link);
            await page.waitForSelector('.cm-CouponModule');
            await page.waitForTimeout(2000);


            //crawl the teams
            const crawledTeams = await page.evaluate(() => {
                const teamsContainer = Array.from(
                  document.querySelectorAll(".gl-Market_General-haslabels .scb-ParticipantFixtureDetailsHigherBasketball .scb-ParticipantFixtureDetailsHigherBasketball_TeamWrapper .scb-ParticipantFixtureDetailsHigherBasketball_Team")
                );

                const names = teamsContainer.map((teamContainer) => {
                  return teamContainer.innerText;
                });
                return names;
            });

            //crawl the spread
            const crawledSpreads = await page.evaluate(() => {
                const teamsSpreads = Array.from(
                  document.querySelectorAll(".sgl-MarketOddsExpand .sac-ParticipantCenteredStacked50OTB-wide .sac-ParticipantCenteredStacked50OTB_Handicap")
                );

                const spreads = teamsSpreads.map((teamsSpread) => {
                  return teamsSpread.innerText;
                });

                return spreads;
            });

            const middleIndex = Math.ceil(crawledSpreads.length / 2);
            const firstHalf   = crawledSpreads.splice(0, middleIndex);
            const secondHalf  = crawledSpreads.splice(-middleIndex);

            await browser.close();

            //process team details
            if(crawledTeams) {
                let counter       = 0;
                let index_counter = 0;

                crawledTeams.forEach((team, index) => {
                    if(typeof(result[index_counter]) == 'undefined') {
                        result[index_counter] = {};
                    }

                    if(counter % 2 == 0 || counter == 0) {
                        result[index_counter].team_a        = team;
                        result[index_counter].team_a_spread = firstHalf[index];
                        result[index_counter].team_a_total  = secondHalf[index];
                    } else {
                        result[index_counter].team_b        = team;
                        result[index_counter].team_b_spread = firstHalf[index];
                        result[index_counter].team_b_total  = secondHalf[index];
                    }

                    if(result[index_counter].team_a && result[index_counter].team_b) {
                        index_counter++;
                    }

                    counter++;
                });
            }

            return result;
        } catch (e) {
            response.status(400).send(error.message);
        }
    }
}

module.exports = MatchController
