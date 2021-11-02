<template>
    <div class="columns">
        <div class="column">
            <div class="columns is-mobile">
                <div class="column">
                    <div class="field">
                        <label class="label">League ID</label>
                        <div class="control">
                            <input v-model="league" class="input" type="text" placeholder="Input Team Name">
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="field">
                        <label class="label">Team Name</label>
                        <div class="control">
                            <input v-model="teamname" class="input" type="text" placeholder="Input Team Name">
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column">
                    <div class="field">
                            <label class="label">Team Short Name</label>
                            <div class="control">
                                <input v-model="shortname" class="input" type="text" placeholder="Input Team Short Name">
                            </div>
                    </div>
                </div>
                <div class="column ">
                    <div class="file">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume">
                            <span class="file-cta">
                            <span class="file-icon">
                                <i class="fas fa-upload"></i>
                            </span>
                            <span class="file-label">
                                Choose a file…
                            </span>
                            </span>
                        </label>
                    </div>
                </div>
            </div>   
            <div class="columns">
                     <div class="field is-grouped pt-2">
                    <div class="control">
                        <button class="button is-link" @click="create">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </div> 
        </div>
    </div>   
            
</template>

<script>
export default {
    name: `CreateTeam`,
    data(){
        return {
            teamname: '',
            shortname: '',
            league: '',
        }
    },
    components: {
    },
    computed: {
    },
    mounted() {
       // this.$store.dispatch("GET_MATCHES");
    },
    methods: {
        async create(){
            const payload = {
                name : this.teamname,
                'short-name' : this.shortname,
                'league-id': this.league,
            }
        const create = await this.$store.dispatch("POST_TEAM", payload);
         console.log('asdasaaaaaaaa', create)
        }
    }
};
</script>

<style></style>
