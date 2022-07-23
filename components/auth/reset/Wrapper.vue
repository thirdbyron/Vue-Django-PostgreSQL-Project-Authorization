<template>
  <div class="auth_wrapper" @keyup.enter="resetPassword(resetData)">
    <div class="auth_wrapper_second">
      <div class="auth_wrapper_top">
        <AuthLogo />
        <AuthResetTitle v-if="resetSuccesPassword === false" />
        <AuthResetSuccesWrapper v-if="resetSuccesPassword === true"/>
      </div>
      <div class="auth_wrapper_form">
        <AuthResetForm v-if="resetSuccesPassword === false" />
        <AuthResetSubmit @resetPassword="resetPassword(resetData)" :class="{ canSubmit: resetData.password }"
          v-if="resetSuccesPassword === false">
          Сбросить пароль
        </AuthResetSubmit>
        <AuthResetSuccesButton v-if="resetSuccesPassword === true"/>
      </div>
    </div>
    <AuthBottom-text />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("login", ["activeAuthTab", "resetData", "resetSuccesPassword"]),

  },

  methods: {
    async resetPassword(resetData) {
      if (this.$route.params.token) {
        await this.$axios
          .$post("users/reset_password_confirm/", {
            new_password: resetData.password,
            uid: this.$route.params.uid,
            token: this.$route.params.token,
          })
          .then((response) => {
            this.$store.commit("login/resetSuccesPassword", true)
          })
          .catch((error) => {
            let err = error.response.data;
            if (err.new_password) {
              this.$store.commit("login/catchPasswordReset", true);
            } else this.$store.commit("login/catchPasswordReset", false);
            if (err.uid) {
              this.$store.commit("login/catchPasswordResetNotExist", true);
            } else this.$store.commit("login/catchPasswordResetNotExist", false);
            if (err.token) {
              this.$store.commit("login/catchPasswordResetToken", true);
            } else this.$store.commit("login/catchPasswordResetToken", false);
            console.log(error.response);
          });
      }
    },
  },
};
</script>

<style lang="scss">
</style>