<template>
  <form class="auth_form_wrapper">
    <div class="auth_field_wrapper">
      <label for="username-field" class="auth_placeholder"
        >Имя пользователя или эл. почта:</label
      >
      <input
        id="username-field"
        class="auth_input"
        type="text"
        placeholder="Введите имя пользователя или эл. почту"
        v-model="username"
        required
        @keydown="clearErrorSignin()"
        autocomplete="username"
      />
      <div class="auth_error_icon" v-if="catchErrorSignin">
        <img class="error_icon" src="/icons/error.png" alt="" />
        {{ catchErrorSignin.message }}
        <div @click="pushToResend()" class="auth_error_icon_link" v-if="catchErrorSignin.type == 'notactive'">Ссылка активации была отправлена на вашу почту. Отправить повторно?</div>
      </div>
    </div>
    <div class="auth_field_wrapper">
      <div>
<label for="password-field" class="auth_placeholder">Пароль:</label>
      </div>
      
      <input
        id="password-field"
        class="auth_input"
        type="password"
        placeholder="Введите пароль"
        v-model="password"
        required
        @keydown="clearErrorSignin()"
        autocomplete="current-password"
      />

      <div @click="pushToReset()" class="auth_password_recover">Забыли пароль?</div>
    </div>
  </form>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState("login", ["signInData"]),
    ...mapGetters("login", ["catchErrorSignin"]),
    username: {
      get() {
        return this.signInData.username;
      },
      set(value) {
        this.$store.commit("login/enterUsername", value);
      },
    },
    password: {
      get() {
        return this.signInData.password;
      },
      set(value) {
        this.$store.commit("login/enterPassword", value);
      },
    },
  },

  methods: {
    clearErrorSignin() {
      this.$store.dispatch("login/clearErrorSignin", false)
    },
    pushToResend() {
      this.$router.push('/activate/resend')
      this.$store.dispatch("login/clearErrorSignin", false)
    },
    pushToReset() {
      this.$router.push('/password/reset')
      this.$store.dispatch("login/clearErrorSignin", false)
    }
  }
};
</script>

<style lang="scss" >
</style>