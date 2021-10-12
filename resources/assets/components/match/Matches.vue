<template>
    <div class="columns">
        <div class="column is-two-third">
            <div v-for="match in matches" :key="`match-${match.id}`">
                <single-match :match="match"></single-match>
            </div>
        </div>
        <div class="column is-one-third">
            <bet-slip></bet-slip>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import SingleMatch from "./SingleMatch.vue";
import BetSlip from "./BetSlip.vue";
export default {
    components: {
        SingleMatch,
        BetSlip
    },
    computed: {
        ...mapGetters(["matches"])
    },

    mounted() {
        this.$store.dispatch("GET_MATCHES");
    }
};
</script>

<style></style>
