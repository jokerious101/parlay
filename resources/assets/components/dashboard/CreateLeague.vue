<template>
    <div class="columns">
        <div class="column">
            <div class="columns is-mobile">
                <div class="column">
                <div class="field">
                            <label class="label">Team Name</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Input Team Name">
                            </div>
                        </div>
                </div>
                <div class="column">
                    <div class="field">
                            <label class="label">Description</label>
                            <div class="control">
                                <input class="input" type="text" placeholder="Input Description">
                            </div>
                        </div>
                </div>
            </div>
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
            <div class="field is-grouped pt-2">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    components: {
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
