let getters = {
    matches: state => {
        return state.matches;
    },
    leagues: state => {
        return state.leagues;
    },
    teams: state => {
        return state.teams;
    },
    users: state => {
        return state.users;
    },
    bets: state => {
        return state.bets;
    },
    get_user: state => {
        return state.user
    }
    
};

export default getters;
