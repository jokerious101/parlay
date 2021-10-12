<template>
    <div class="panel is-primary mb-3 has-panel-radius-large">
        <p class="panel-heading has-panel-radius-large">
            {{ matchTitle }}
            <span class="match-schedule">{{ match.schedule }}</span>
        </p>
        <div class="p-2">
            <div class="columns level">
                <div class="column is-one-fifth">
                    {{ match.schedule.split(" ")[1] }}
                </div>
                <div class="column">
                    <!-- TEAM A -->
                    <div class="columns">
                        <div class="column is-one-third">
                            <div class="columns level">
                                <div class="column is-one-fifth mr-2">
                                    <figure class="image is-48x48">
                                        <img :src="match.team_a.logo" />
                                    </figure>
                                </div>
                                <div class="column">
                                    {{ match.team_a.name }}
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <button
                                class="button is-info is-light is-fullwidth is-outlined"
                            >
                                {{
                                    match.team_a.name == match.favored
                                        ? `-${match.spread}`
                                        : `+${match.spread}`
                                }}
                            </button>
                        </div>
                        <div class="column is-one-third">
                            <button
                                class="button is-info is-light is-fullwidth is-outlined"
                            >
                                {{
                                    match.team_a.name == match.favored
                                        ? `OVER ${match.total_score}`
                                        : `UNDER ${match.total_score}`
                                }}
                            </button>
                        </div>
                    </div>
                    <!-- TEAM B -->
                    <div class="columns">
                        <div class="column is-one-third">
                            <div class="columns level">
                                <div class="column is-one-fifth mr-2">
                                    <figure class="image is-48x48">
                                        <img :src="match.team_b.logo" />
                                    </figure>
                                </div>
                                <div class="column">
                                    {{ match.team_b.name }}
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third">
                            <button
                                class="button is-info is-light is-fullwidth is-outlined"
                            >
                                {{
                                    match.team_b.name == match.favored
                                        ? `-${match.spread}`
                                        : `+${match.spread}`
                                }}
                            </button>
                        </div>
                        <div class="column is-one-third">
                            <button
                                class="button is-info is-light is-fullwidth is-outlined"
                            >
                                {{
                                    match.team_b.name == match.favored
                                        ? `OVER ${match.total_score}`
                                        : `UNDER ${match.total_score}`
                                }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["match"],
    computed: {
        matchTitle: function() {
            console.log("this.match : ", this.match);
            return `${
                this.match.home_court == this.match.team_a.name
                    ? this.match.team_b.name
                    : this.match.team_a.name
            } at ${
                this.match.home_court == this.match.team_a.name
                    ? this.match.team_a.name
                    : this.match.team_b.name
            }`;
        }
    }
};
</script>

<style scoped>
.match-schedule {
    float: right;
}
</style>
