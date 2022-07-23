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
        @keydown="clearErrorResetEmail"
        autocomplete="email"
      />
      <div class="auth_error_icon" v-if="catchErrorResetEmail">
        <img class="error_icon" src="/icons/error.png" alt="" />
        {{ catchErrorResetEmail.message }}
        <div @click="pushToResend()" class="auth_error_icon_link" v-if="catchErrorResetEmail.type == 'notactive'">Ссылка активации была отправлена на вашу почту. Отправить повторно?</div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState("login", ["resetData"]),
    ...mapGetters("login", ["catchErrorResetEmail"]),

    email: {
      get() {
        return this.resetData.email;
      },
      set(value) {
        this.$store.commit("login/putEmail", value);
      },
    },
  },

  methods: {
    clearErrorResetEmail() {
      this.$store.dispatch("login/clearErrorResetEmail", false)
    },
    pushToResend() {
      this.$router.push('/activate/resend')
      this.$store.dispatch("login/clearErrorResetEmail", false)
    }
  }
};
</script>

<style lang="scss" >
</style>