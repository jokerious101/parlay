<template>
    <div class="columns">
        <div class="column">
            <div class="columns is-mobile">
                <div class="column">
                <div class="field">
                    <label class="label">League Name</label>
                    <div class="control">
                        <input v-model="leaguename" class="input" type="text" placeholder="Input Team Name">
                    </div>
                        </div>
                </div>
                <div class="column">
                    <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <input v-model="description" class="input" type="text" placeholder="Input Description">
                    </div>
                        </div>
                </div>
            </div>
            <!-- <div class="file">
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
            </div> -->
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
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
    name: `CreateLeague`,
    data(){
        return {
            leaguename: '',
            description: '',
        }
    },
    components: {
    },
     computed: {
        ...mapGetters(["leagues"]),
        ...mapState(["leagues"])
    },
    methods: {
        ...mapActions(["GET_LEAGUES"])
    },
   
    methods: {
        async create(){
             const payload = {
                name : this.leaguename,
                description : this.description,
            }
        
        const create = await this.$store.dispatch("POST_LEAGUE", payload);
        this.leaguename = "";
        this.description = "";
        console.log('asdasaaaaaaaa', create)
        }
    },
};
</script>

<style></style>
