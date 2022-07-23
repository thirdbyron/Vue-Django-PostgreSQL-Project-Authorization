<template>
  <form class="auth_form_wrapper">
    <div class="auth_field_wrapper">
      <label for="reset_password" class="auth_placeholder">Новый пароль:</label>
      <input
        id="reset_password"
        class="auth_input"
        type="password"
        placeholder="Создайте новый пароль"
        v-model="password"
        required
        @keydown="clearErrorResetPassword"
        autocomplete="new-password"
      />
      <div class="auth_error_icon" v-if="catchErrorPasswordReset">
        <img class="error_icon" src="/icons/error.png" alt="" />
        {{ catchErrorPasswordReset.message }}
      </div>
    </div>
  </form>
</template>

<script>

import { mapState, mapGetters } from "vuex"

export default {
  
  computed: {
    ...mapState("login", [
      "resetData",
    ]),
    ...mapGetters("login", ["catchErrorPasswordReset"]),
     password: {
      get() {
        return this.resetData.password;
      },
      set(value) {
        this.$store.commit("login/putNewPassword", value);
      },
  }
 },

 methods: {
    clearErrorResetPassword() {
      this.$store.dispatch("login/clearErrorResetPassword", false)
    }
  }
}
</script>