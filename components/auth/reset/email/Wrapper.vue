<template>
  <div class="auth_wrapper" @keyup.enter="sendEmail(resetData)">
    <div class="auth_wrapper_second">
      <div class="auth_wrapper_top">
        <AuthLogo />
        <AuthBack v-if="resetSuccesEmail === false" />
        <AuthResetEmailTitle v-if="resetSuccesEmail === false"/>
        <AuthResetEmailSucces v-if="resetSuccesEmail === true" />
      </div>
      <div class="auth_wrapper_form">
        <AuthResetEmailForm v-if="resetSuccesEmail === false" />
        <AuthResetSubmit @resetPassword="sendEmail(resetData)" :class="{ canSubmit: resetData.email }"
          v-if="resetSuccesEmail === false">
          Отправить ссылку
        </AuthResetSubmit >
        <AuthResetEmailButton v-if="resetSuccesEmail === true"/>
      </div>
    </div>
    <AuthBottom-text />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("login", ["activeAuthTab", "resetData", "resetSuccesEmail"]),

  },

  methods: {
    async sendEmail(resetData) {
      if (!this.$route.params.token) {
        await this.$axios
          .$post("users/reset_password/", { email: resetData.email })
          .then((response) => {
            this.$store.commit("login/resetSuccesEmail", true)
          })
          .catch((error) => {
            "User with given email does not exist."
            let err = error.response.data;
            if (err.email == "Enter a valid email address.") {
              this.$store.commit("login/catchResetEmailInvalidError", true);
            } else this.$store.commit("login/catchResetEmailInvalidError", false);
            if (err == "User with given email does not exist.") {
              this.$store.commit("login/catchResetEmailNotexistError", true);
            } else this.$store.commit("login/catchResetEmailNotexistError", false);
            if (err == "User account is disabled.") {
              this.$store.commit("login/catchResetEmailNotActive", true);
            } else this.$store.commit("login/catchResetEmailNotActive", false);
            console.log(error.response);

          });
      }
    },
  },
};
</script>

<style lang="scss">
</style>