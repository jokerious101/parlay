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
        console.log('userszz', users)
        state.user = users;
    }
};

export default mutations;
