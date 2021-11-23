let mutations = {
    GET_MATCHES(state, matches) {
        state.matches = matches;
    },
    SET_LEAGUES(state, leagues) {
        state.leagues = leagues;
    },
    SET_TEAMS(state, teams){
        state.teams = teams;
    },
    SET_USERS(state, users){
        state.users = users;
    },
    SET_COOKIE(state, users){
        console.log('userszz', users.access_token)
        state.user = users;
    },
    SET_BETS(state, bets){
        state.bets = bets;
    },
    SET_TEAMSs(state, teams){
        console.log("teams state", teams);
        state.teams = teams;
    },
};

export default mutations;
