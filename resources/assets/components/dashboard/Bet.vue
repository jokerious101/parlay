<template>
    <div class="columns">
        <div class="column">
            <table class="table">
                <thead class="has-text-centered">
                    <tr>
                    <th>User ID</th>
                    <th>League ID</th>
                    <th>Match ID</th>
                    <th>Team ID</th>
                    </tr>
                </thead>
                <tbody v-for="(bet, key) in bets"
                    :key="`pick-${key}`">
                    <tr class="has-text-centered">
                    <th>{{bet.user_id}}</th>
                    <th>{{bet.league_id}}</th>
                    <td>{{bet.match_id}}</td>
                    <td>{{bet.team_id}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
    components: {
    },
    computed: {
        ...mapGetters(["bets"]),
        ...mapState(["bets"])
    },
    methods: {
        ...mapActions(["GET_BETS"])
    },
    mounted() {
        this.GET_BETS();
    }
};
</script>

<style></style>
