<template>
    <div class="columns">
        <div class="column is-one-quarter">
            <side-nav></side-nav>
        </div>
         <div class="container column is-10">
        <div class="section">
          <div class="card">
            <div class="card-header"><p class="card-header-title">Header</p></div>
            <div class="card-content"><div class="content">Content</div></div>
          </div>
          <br />
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import SideNav from "./sidenav.vue";
export default {
    components: {
        SideNav
    },
    computed: {
        ...mapGetters(["matches"])
    },

    mounted() {
        
    }
};
</script>

<style></style>
