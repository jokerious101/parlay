import axios from "axios";

let actions = {
    GET_MATCHES({ commit }) {
        console.log("called GET_MATCHES");
        commit("GET_MATCHES", [
            {
                id: 1,
                name: "Bucks vs Nets",
                spread: 2.5,
                total_score: 240.5,
                schedule: "2021-10-12 10:00:00",
                team_a: {
                    name: "Bucks",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg"
                },
                team_b: {
                    name: "Nets",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg"
                },
                home_court: "Bucks",
                favored: "Nets"
            },
            {
                id: 2,
                name: "Pacers vs Hornets",
                spread: 5.5,
                total_score: 230.5,
                schedule: "2021-10-12 11:00:00",
                team_a: {
                    name: "Pacers",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg"
                },
                team_b: {
                    name: "Hornets",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg"
                },
                home_court: "Hornets",
                favored: "Hornets"
            },
            {
                id: 1,
                name: "Bucks vs Nets",
                spread: 2.5,
                total_score: 240.5,
                schedule: "2021-10-12 10:00:00",
                team_a: {
                    name: "Bucks",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg"
                },
                team_b: {
                    name: "Nets",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg"
                },
                home_court: "Bucks",
                favored: "Nets"
            },
            {
                id: 2,
                name: "Pacers vs Hornets",
                spread: 5.5,
                total_score: 230.5,
                schedule: "2021-10-12 11:00:00",
                team_a: {
                    name: "Pacers",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg"
                },
                team_b: {
                    name: "Hornets",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg"
                },
                home_court: "Hornets",
                favored: "Hornets"
            },
            {
                id: 1,
                name: "Bucks vs Nets",
                spread: 2.5,
                total_score: 240.5,
                schedule: "2021-10-12 10:00:00",
                team_a: {
                    name: "Bucks",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg"
                },
                team_b: {
                    name: "Nets",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg"
                },
                home_court: "Bucks",
                favored: "Nets"
            },
            {
                id: 2,
                name: "Pacers vs Hornets",
                spread: 5.5,
                total_score: 230.5,
                schedule: "2021-10-12 11:00:00",
                team_a: {
                    name: "Pacers",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg"
                },
                team_b: {
                    name: "Hornets",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg"
                },
                home_court: "Hornets",
                favored: "Hornets"
            },
            {
                id: 1,
                name: "Bucks vs Nets",
                spread: 2.5,
                total_score: 240.5,
                schedule: "2021-10-12 10:00:00",
                team_a: {
                    name: "Bucks",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg"
                },
                team_b: {
                    name: "Nets",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612751/global/L/logo.svg"
                },
                home_court: "Bucks",
                favored: "Nets"
            },
            {
                id: 2,
                name: "Pacers vs Hornets",
                spread: 5.5,
                total_score: 230.5,
                schedule: "2021-10-12 11:00:00",
                team_a: {
                    name: "Pacers",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612754/global/L/logo.svg"
                },
                team_b: {
                    name: "Hornets",
                    logo:
                        "https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg"
                },
                home_court: "Hornets",
                favored: "Hornets"
            }
        ]);
        // axios
        //     .get("/bets")
        //     .then(res => {
        //         {
        //             commit("GET_MATCHES", res.data);
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    },

    //GET ALL LEAGUES
    async GET_LEAGUES({ commit }){
        try{
        let leagues = await axios('/league')
            .then(response => {
                return response.data;
            });
            commit('SET_LEAGUES', leagues);
            console.log("leagues", leagues);
        } catch(error){

        }
    },

    //GET ALL TEAMS
    async GET_TEAMS({ commit }){
        try{
        let teams = await axios('/team')
            .then(response => {
                return response.data;
            });
            commit('SET_TEAMS', teams);
            console.log("teams", teams);
        } catch(error){

        }
    },

       //GET ALL USERS
       async GET_USERS({ commit }){
        try{
        let users = await axios('/user')
            .then(response => {
                return response.data;
            });
            commit('SET_USERS', users);
            console.log("users", users);
        } catch(error){

        }
    },

    async LOGIN({ commit }, payload){
        try{
        console.log('payload', payload)
        let user = await axios.post('/login', payload)
            .then(response => {
                return response.data;
            });
            console.log('userdata', user)
            commit('SET_COOKIE', user);
            return user;
        } catch(error){
            console.log("error", error);
        }
    },

    async REGISTER({ commit }, payload){
        try{
        console.log('payload', payload)
        let users = await axios.post('/register', payload)
            .then(response => {
                return response.data;
            });
            commit('SET_COOKIE', users);
        } catch(error){
            console.log('error', error)
        }
    },

    async GET_USER_DATA({ commit }, payload){
        try{
        let user = await axios.get('/user/show', payload)
            .then(response => {
                return response;
            });
            console.log('GET USER DATA', user)
            commit('SET_COOKIE', user);
            return user;
        } catch(error){
            console.log("error", error);
        }
    },


     //GET ALL BETS
     async GET_BETS({ commit }){
        try{
        let bets = await axios('/bet')
            .then(response => {
                return response.data;
            });
            commit('SET_BETS', bets);
            console.log("bets", bets);
        } catch(error){

        }
    },

    // Create Team
    async POST_TEAM({ commit }, payload){
        try{
            console.log('payload', payload)
            let teams = await axios.post(`/create/team`, payload)
                .then(response => {
                    return response.data;
                });
                commit('SET_TEAMS', teams);
                console.log("teams", teams);
        } catch(error){
            console.log("error", error);
        }
    },

    // Create League
    async POST_LEAGUE({ commit }, payload){
        try{
            console.log('payload', payload)
            let leagues = await axios.post(`/create/league`, payload)
                .then(response => {
                    return response.data;
                });
                commit('SET_LEAGUES', leagues);
                console.log("leagues", leagues);
        } catch(error){
            console.log("error", error);
        }
    }
};

export default actions;
