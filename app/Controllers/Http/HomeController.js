"use strict";

class HomeController {
    async index({ auth, view }) {
        console.log('user', await auth.getUser())
        return view.render("home");
    }
}

module.exports = HomeController;
