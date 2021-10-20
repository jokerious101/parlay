"use strict";

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
Route.resource('/league', 'LeagueController');
Route.resource('/match', 'MatchController');
Route.resource('/team', 'TeamController');
Route.resource('/bet', 'BetController');
Route.resource('/user', 'UserController');

Route.post('login', 'UserController.login').middleware('guest');

Route.get('users/:id', 'UserController.show').middleware('auth');
Route.post('register', 'UserController.store').middleware('guest');

