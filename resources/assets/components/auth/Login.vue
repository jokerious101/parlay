<template>
    <div class="hero is-fullheight is-primary">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-6 is-offset-3">
      <h3 class="title has-text-white">Login</h3>
        <hr class="login-hr">
        <p class="subtitle has-text-white">Welcome to Parlay!</p>

        <div class="box">
            <div class="box">
                <img src="https://s3.ap-southeast-1.amazonaws.com/dev.2ez.bet.s3bucket/teams/1634815907289_a6689dc4-720d-4e0f-8bf5-cdd347ed9da9.png" width="200" height="121">
            </div>
            <form>
                <div class="field">
                    <label for="" class="label">Username</label>
                    <div class="control has-icons-left">
                        <input v-model="username" type="text" placeholder="Username" class="input" required>
                        <span class="icon is-small is-left">
                        <i class="fa fa-user"></i>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <label for="" class="label">Password</label>
                    <div class="control has-icons-left">
                        <input v-model="password" type="password" placeholder="*********" class="input" required>
                        <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                        </span>
                    </div>
                </div>

                <label class="checkbox" style="margin: 20px;">
                    <input type="checkbox">
                        Remember me
                    </label>
                <button type ="button" class="button is-block is-danger is-large is-fullwidth" @click="login">Login</button>
                <br/>
                <p class="has-text-grey">
                <a href="">Sign Up</a> &nbsp;·&nbsp;
                <a href="">Forgot Password</a> &nbsp;·&nbsp;
                <a href="">Need Help?</a>
                </p>
            </form>
            </div>
            </div>
            </div>
            
        </div>
    </div>
</template>


<script>
import { mapState, mapGetters } from "vuex";
export default {
    name: 'Login',
    components: {
    },

    data(){
        return {
            username: '',
            password: ''
        }
    },

    mounted() {
        // this.$store.dispatch("GET_MATCHES");
    },
    computed: {
        ...mapGetters(["get_user"]),
        ...mapState(["user"])
    },
    methods: {
        async login(){
            const payload = {
                username: this.username,
                password: this.password
            }
            const login = await this.$store.dispatch("LOGIN", payload)
            console.log('login', login)
            console.log('get_user', this.get_user())
            // if(login.success){
            //     window.location = "/";
            // }
        }
    },
    created(){
        console.log("user state: ",this.user)
    }
};
</script>

<style></style>
