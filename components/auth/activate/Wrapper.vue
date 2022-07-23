<template>
  <div class="auth_wrapper">
    <div class="auth_wrapper_second">
      <div class="auth_wrapper_top">
        <AuthLogo />


      </div>
      <div class="auth_wrapper_form">
        <AuthActivateCongrats v-if="errorStaleToken === false" />
        <AuthActivateRepeat v-if="errorStaleToken === true" />
        <AuthActivateButton @timerStop="timerStop()"/>
      </div>
    </div>
    <AuthBottom-text />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      timerPush: null
    }
  },
  computed: {
    ...mapState("login", ["errorStaleToken"]),
  },
  auth: false,
  methods: {
    timerStop () {
      clearTimeout(this.timerPush);
       console.log("errors:");
    },
    pushToLogin () {
      this.$router.push('/login')
      this.$store.commit("login/catchErrorStaleToken", false);
    }
  },

  mounted() {
    this.$axios
      .post("/users/activation/", this.$route.params)
      .then((response) => {
        this.timerPush = setTimeout(() => { this.$router.push('/login') }, 6000);
      })
      .catch((error) => {
        this.$store.commit("login/catchErrorStaleToken", true);
        console.log("errors:", error.response);
        this.timerPush = setTimeout(() => { this.$router.push('/login') }, 6000);
      });
  },
}
</script>

<style lang="scss">
</style>