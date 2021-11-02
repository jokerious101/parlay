<template>
    <div class="columns">
        <div class="column">
            <table class="table">
                <thead class="has-text-centered">
                    <tr>
                    <th>ID</th>
                    <th>League Name</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody v-for="(league, key) in leagues"
                    :key="`pick-${key}`">
                    <tr class="has-text-centered">
                    <th>{{league.id}}</th>
                    <td>{{league.name}}</td>
                    <td>{{league.description}}</td>
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
        ...mapGetters(["leagues"]),
        ...mapState(["leagues"])
    },
    methods: {
        ...mapActions(["GET_LEAGUES"])
    },
    mounted() {
        this.GET_LEAGUES();
    }
};
</script>

<style></style>
