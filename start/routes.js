"use strict";

const HomeController = require("../app/Controllers/Http/HomeController");
const DashboardController = require("../app/Controllers/Http/DashboardController");

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

Route.get("/", "HomeController.index");
Route.get("/dashboard", "DashboardController.index");

//matches admin view
Route.get("/match/create", "DashboardController.createMatchView");

Route.resource("/league", "LeagueController");
Route.resource("/match", "MatchController");
Route.resource("/team", "TeamController");
Route.resource("/bet", "BetController");

Route.get("/register", "UserController.register");
Route.resource("/login", "UserController");

Route.resource("/user", "UserController");
Route.resource("/dashboard", "HomeController");

Route.post("login", "UserController.login").middleware("guest");

Route.get("users/:id", "UserController.show").middleware("auth");
Route.post("register", "UserController.store").middleware("guest");

// Route.on('/dashboard').render('dashboard');
