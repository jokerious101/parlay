"use strict";

const HomeController = require("../app/Controllers/Http/HomeController");
const DashboardController = require("../app/Controllers/Http/DashboardController");
const { RouteResource } = require("@adonisjs/framework/src/Route/Manager");
const TeamController = require("../app/Controllers/Http/TeamController");

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

// Route.on('/').render('welcome')

Route.get("/", "HomeController.index").middleware("auth");
Route.get("/dashboard", "DashboardController.index");

//matches admin view
Route.get("/dashboard/match/create", "DashboardController.createMatchView");
Route.get("/dashboard/matches/all", "DashboardController.getMatchView");

//leagues admin view
Route.get("/dashboard/league/create", "DashboardController.createLeagueView");
Route.get("/dashboard/leagues/all", "DashboardController.getLeagueView");

//teams admin view
Route.get("/dashboard/team/create", "DashboardController.createTeamView");
Route.get("/dashboard/teams/all", "DashboardController.getTeamView");

//users admin view
Route.get("/dashboard/users/all", "DashboardController.getUserView");

//users admin view
Route.get("/dashboard/bets/all", "DashboardController.getBetView");

Route.resource("/league", "LeagueController");
Route.resource("/match", "MatchController");
Route.resource("/team", "TeamController");
Route.resource("/bet", "BetController");

Route.get("/register", "UserController.register");
Route.resource("/login", "UserController");

Route.resource("/user", "UserController");
Route.resource("/dashboard", "HomeController");

Route.post("/api/login", "UserController.login").middleware("guest");

Route.get("users/:id", "UserController.show").middleware("auth");
Route.post("/api/register", "UserController.store").middleware("guest");

Route.get("/api/user/show", "UserController.show").middleware("auth");
Route.post("register", "UserController.store").middleware("guest");
Route.post("api/create/team", "TeamController.store");
Route.post("api/create/league", "LeagueController.store");

// Route.on('/dashboard').render('dashboard');

Route.get("api/league", "LeagueController.index");
Route.get('api/team', "TeamController.index");
Route.get('api/user', "UserController.getAll");
Route.get('api/bet', "BetController.index");