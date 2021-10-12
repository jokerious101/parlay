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
    }
};

export default actions;
