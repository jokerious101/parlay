<template>
    <div class="columns">
        <div class="column">
            <table class="table">
                <thead class="has-text-centered">
                    <tr>
                    <th>ID</th>
                    <th>League ID</th>
                    <th>LOGO</th>
                    <th>Team Name</th>
                    <th>Team Short Name</th>
                    </tr>
                </thead>
                <tbody v-for="(team, key) in teams"
                    :key="`pick-${key}`">
                    <tr class="has-text-centered">
                    <th>{{team.id}}</th>
                    <th>{{team.league_id}}</th>
                    <th><figure class="image is-32x32 is-inline-block">
                        <img :src="team.image">
                    </figure></th>
                    <td>{{team.name}}</td>
                    <td>{{team.short_name}}</td>
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
        ...mapGetters(["teams"]),
        ...mapState(["teams"])
    },
    methods: {
        ...mapActions(["GET_TEAMS"])
    },
    mounted() {
        this.GET_TEAMS();
    }
};
</script>

<style></style>
