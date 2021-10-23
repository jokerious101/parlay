<template>
    <div class="columns">
        <div class="column">
            <table class="table">
                <thead class="has-text-centered">
                    <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Credits</th>
                    </tr>
                </thead>
                <tbody v-for="(user, key) in users"
                    :key="`pick-${key}`">
                    <tr class="has-text-centered">
                    <th>{{user.id}}</th>
                    <th>{{user.username}}</th>
                    <td>{{user.email}}</td>
                    <td>{{user.role}}</td>
                    <td>{{user.credits}}</td>
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
        ...mapGetters(["users"]),
        ...mapState(["users"])
    },
    methods: {
        ...mapActions(["GET_USERS"])
    },
    mounted() {
        this.GET_USERS();
    }
};
</script>

<style></style>
