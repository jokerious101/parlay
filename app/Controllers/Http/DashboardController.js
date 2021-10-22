"use strict";

class DashboardController {
    async index({ view }) {
        return view.render("dashboard");
    }

    async createMatchView({ view }) {
        return view.render("admin.matches.create");
    }
}

module.exports = DashboardController;
