<template>
  <div class="auth_wrapper" @keyup.enter="keyUp()">
    <div class="auth_wrapper_second">
      <div class="auth_wrapper_top">
        <AuthLogo />
        <AuthSliderContainer />
      </div>
      <div class="auth_wrapper_form">

        <AuthFormsSignin v-if="activeAuthTab === 'signin'" />
        <AuthFormsRegister v-if="activeAuthTab === 'register'" />
        <AuthSignin-button v-if="activeAuthTab === 'signin'" @signInUser="signInUser(signInData)"
          :class="{ canSubmit: signInData.username && signInData.password }" />

        <AuthRegister-button v-if="activeAuthTab === 'register'" @registerUser="registerUser(userData)" :class="{
          canSubmit:
            userData.email && userData.username && userData.password,
        }" />


      </div>
    </div>
    <AuthBottom-text />
  </div> 
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState("login", ["activeAuthTab", "userData", "succesMessage", "signInData"]),
    ...mapGetters("login", ["registerData"])
  },

  methods: {
    async signInUser(signInData) {
      if (this.activeAuthTab === "signin") {
        if (this.signInData.username && this.signInData.password) {
          try {
            await this.$auth.loginWith("local", {
              data: { username: signInData.username.toLowerCase(), password: signInData.password }
            });
            console.log("notification successful");
          } catch (error) {
            let err = error.response.data;
            if (err.non_field_errors == "Unable to log in with provided credentials.") {
              this.$store.commit("login/catchSigninError", true);
            } else this.$store.commit("login/catchSigninError", false);
            if (err.non_field_errors == "User account is disabled.") {
              this.$store.commit("login/catchSigninNotActiveError", true);
            } else this.$store.commit("login/catchSigninNotActiveError", false);

            console.log(error.response);
          }
        }
      }
    },
    async registerUser(userData) {
      if (this.activeAuthTab === "register") {
        if (
          this.userData.email &&
          this.userData.username &&
          this.userData.password
        ) {

          await this.$axios
            .$post("users/", { email: userData.email, username: userData.username.toLowerCase(), password: userData.password })
            .then((response) => {
              this.$router.push('activate')
              this.$store.commit("login/updateUsername", '')
              this.$store.commit("login/updatePassword", '')
              
              this.$store.dispatch("login/clearErrorEmail", false)
              this.$store.dispatch("login/clearErrorUsername", false)
              this.$store.dispatch("login/clearErrorPassword", false)
            })
            .catch((error) => {
              let err = error.response.data;

              if (err.email == "This field may not be blank.") {
                this.$store.commit("login/catchEmailBlank", true);
              } else this.$store.commit("login/catchEmailBlank", false);

              if (err.email == "A user with that email already exists.") {
                this.$store.commit("login/catchEmailExist", true);
              } else this.$store.commit("login/catchEmailExist", false);

              if (err.email == "Enter a valid email address.") {
                this.$store.commit("login/catchEmailInvalid", true);
              } else this.$store.commit("login/catchEmailInvalid", false);

              if (err.username == "This field may not be blank.") {
                this.$store.commit("login/catchUsernameBlank", true);
              } else this.$store.commit("login/catchUsernameBlank", false);

              if (err.username == "Enter a valid username.") {
                this.$store.commit("login/catchUsernameInvalid", true);
              } else this.$store.commit("login/catchUsernameInvalid", false);

              if (err.username == "A user with that username already exists.") {
                this.$store.commit("login/catchUsernameExist", true);
              } else this.$store.commit("login/catchUsernameExist", false);

              if (err.password) {
                this.$store.commit("login/catchPasswordCreate", true);
              } else this.$store.commit("login/catchPasswordCreate", false);
              console.log(error.response);
            });
        }
      }
    },
    keyUp() {
      if (this.activeAuthTab == 'signin') {
        return this.signInUser(this.signInData)
      }
      if (this.activeAuthTab == 'register') {
        return this.registerUser(this.userData)
      }
    }
  },
};
</script>

<style lang="scss">
</style>