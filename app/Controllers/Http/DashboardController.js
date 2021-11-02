"use strict";

class DashboardController {
    async index({ view }) {
        return view.render("layouts.dashboard");
    }

    async createMatchView({ view }) {
        return view.render("admin.matches.create");
    }

    async createLeagueView({ view }){
        return view.render("admin.leagues.create");
    }

    async createTeamView({ view }){
        return view.render("admin.teams.create");
    }

    async getMatchView({ view }) {
        return view.render("admin.matches.matches");
    }

    async getLeagueView({ view }){
        return view.render("admin.leagues.leagues")
    }

    async getTeamView({ view} ){
        return view.render("admin.teams.teams")
    }
    
    async getUserView({ view} ){
        return view.render("admin.users.users")
    }

    async getBetView({ view} ){
        return view.render("admin.bets.bets")
    }
}

module.exports = DashboardController;
