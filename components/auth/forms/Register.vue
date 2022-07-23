<template>
  <form class="auth_form_wrapper">
    <div class="auth_field_wrapper">
        <label for="email-field" class="auth_placeholder"
        >Электронная почта:</label
      >
      <input
        id="email-field"
        class="auth_input"
        type="email"
        placeholder="Введите адрес эл. почты"
        v-model="email"
        required
        @keydown="clearErrorEmail()"
      />
      
      <div class="auth_error_icon" v-if="catchErrorEmail">
        <img class="error_icon" src="/icons/error.png" alt="" />
        {{ catchErrorEmail.message }}
      </div>
    </div>
    <div class="auth_field_wrapper">
        <label for="username-field" class="auth_placeholder"
        >Имя пользователя:</label
      >
      <input
        id="username-field"
        class="auth_input"
        type="text"
        placeholder="Создайте имя пользователя"
        v-model="username"
        required
        @keydown="clearErrorUsername()"
        autocomplete="username"
      />
      
      <div class="auth_error_icon" v-if="catchErrorUsername">
        <img class="error_icon" src="/icons/error.png" alt="" />
        {{ catchErrorUsername.message }}
      </div>
    </div>

    <div class="auth_field_wrapper">
        <label for="password-field" class="auth_placeholder">Пароль:</label>
      <input
        id="password-field"
        class="auth_input"
        type="password"
        placeholder="Создайте пароль"
        v-model="password"
        required
        @keydown="clearErrorPassword()"
        
        autocomplete="new-password"
      />
      
      <div class="auth_error_icon" v-if="catchErrorPassword">
        <img class="error_icon" src="/icons/error.png" alt="" />
        {{ catchErrorPassword.message }}
      </div>
    </div>
  </form>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  methods: {
    clearErrorEmail() {
      this.$store.dispatch("login/clearErrorEmail", false);
    },
    clearErrorUsername() {
      this.$store.dispatch("login/clearErrorUsername", false);
    },
    clearErrorPassword() {
      this.$store.dispatch("login/clearErrorPassword", false);
    },
  },
  computed: {
    ...mapState("login", [
      "userData",
      "errorsEmail",
      "errorsUsername",
      "errorsPassword",
      "succesMessage"
    ]),
    ...mapGetters("login", [
      "catchErrorEmail",
      "catchErrorUsername",
      "catchErrorPassword",
    ]),

    email: {
      get() {
        return this.userData.email;
      },
      set(value) {
        this.$store.commit("login/updateEmail", value);
  
      },
    },
    username: {
      get() {
        return this.userData.username;
      },
      set(value) {
        this.$store.commit("login/updateUsername", value);
      },
    },
    password: {
      get() {
        return this.userData.password;
      },
      set(value) {
        this.$store.commit("login/updatePassword", value);
      },
    },
    getErrorMessage() {
      let errorMessageUsername = this.errorsUsername.find(
        (el) => el.error === true
      );
      if (errorMessageUsername) {
        return errorMessageUsername.message;
      }
    },
  },
};
</script>

<style lang="scss" >

</style>