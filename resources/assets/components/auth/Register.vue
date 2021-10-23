<template>
    <div class="hero is-fullheight is-primary">
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="column is-6 is-offset-3">
      <h3 class="title has-text-white">Sign-up</h3>
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
                    <label for="" class="label">Email</label>
                    <div class="control has-icons-left">
                        <input v-model="email" type="text" placeholder="email" class="input" required>
                        <span class="icon is-small is-left">
                        <i class="fa fa-email"></i>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <label for="" class="label">Password</label>
                    <div class="control has-icons-left">
                        <input 
                        v-model="password" 
                        type="password" 
                        placeholder="*********" 
                        class="input" 
                        required
                        >
                        <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                        </span>
                    </div>
                </div>
                <!-- <div class="field">
                    <label for="" class="label">Confirm Password</label>
                    <div class="control has-icons-left">
                        <input 
                        v-model="confirmPassword" 
                        type="password" 
                        placeholder="*********" 
                        class="input" 
                        required
                        >
                        <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                        </span>
                    </div>
                </div> -->

                <label class="checkbox" style="margin: 20px;">
                    <input type="checkbox">
                        Remember me
                    </label>
                <button class="button is-block is-danger is-large is-fullwidth" @click="register">Sign-up</button>
                <br />
                <p class="has-text-grey">
                <a href="">Login</a> &nbsp;·&nbsp;
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
export default {
    name: 'Login',
    components: {
    },

    data(){
        return {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            value: String,
            value2: String,
            passwordRules: [
                (password) => !!password || "Password is required",
                (password) =>
                password.length >= 6 || "Password must be at least 6 characters",
                (confirmation) =>
                confirmation === this.password || "Passwords must match",
            ],
        }
    },

    mounted() {
        // this.$store.dispatch("GET_MATCHES");
    },
    methods: {
        async register(){
            const payload = {
                username: this.username,
                email: this.email,
                password: this.password
            }
            const register = await this.$store.dispatch("REGISTER", payload)
            console.log('asdasaaaaaaaa', register)
        }
    }
};
</script>

<style></style>