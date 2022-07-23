<template>
    <div class="auth_reset_succes_button" @click="passSucces()">
            Войти
    </div>

</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState("login", ["resetSuccesPassword"]),

    },
    methods: {
        passSucces() {
            this.$router.push('/login')
            this.$store.dispatch("login/clearErrorSignin", false)
            this.$store.dispatch("login/clearErrorResetEmail", false)
            this.$store.dispatch("login/clearErrorEmail", false)
            this.$store.dispatch("login/clearErrorUsername", false)
            this.$store.dispatch("login/clearErrorPassword", false)
            this.$store.dispatch("login/clearErrorResetPassword", false)
            
        }
    }
}
</script>

<style lang="scss">
.auth_icon_wrapper {

    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    align-items: center;
    column-gap: 1vh;
    grid-template-columns: auto 1fr;
    font-family: $cr;
    font-size: 16px;
    text-decoration: none;
    @include outer_shadow;
    border-radius: 20px;
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;

}

.auth_icon_wrapper:active {
    color: black;
}

.auth_icon_wrapper:visited {
    color: black;
}

.auth_icon {
    display: grid;
    width: 20px;

}
</style>