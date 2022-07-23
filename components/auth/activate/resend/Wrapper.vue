<template>
  <div class="auth_wrapper" @keyup.enter="sendEmail(resetData)">
    <div class="auth_wrapper_second">
      <div class="auth_wrapper_top">
        <AuthLogo />
        <AuthBack v-if="resendActivateSucces === false" />
        <AuthActivateResendTitle v-if="resendActivateSucces === false" />
        <AuthActivateResendSucces v-if="resendActivateSucces === true" /> 
      </div>
      <div class="auth_wrapper_form">
        <AuthResetEmailForm v-if="resendActivateSucces === false" />
        <AuthResetSubmit @resetPassword="sendEmail(resetData)" :class="{ canSubmit: resetData.email }"
          v-if="resendActivateSucces === false">
          Отправить ссылку
        </AuthResetSubmit>
        <AuthActivateResendButton v-if="resendActivateSucces === true" />
      </div>
    </div>
    <AuthBottom-text />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("login", ["activeAuthTab", "resetData", "resendActivateSucces"]),

  },

  methods: {
    async sendEmail(resetData) {

      await this.$axios
        .$post("users/resend_activation/", { email: resetData.email })
        .then((response) => {
          this.$store.commit("login/resendActivateSucces", true)
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
          console.log(error.response);

        });

    },
  },
};
</script>

<style lang="scss">
</style>