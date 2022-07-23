<template>
  <div class="auth_activate_button_wrapper" >
    <div class="auth_activate_button" @click="pushToLogin()">
      Войти
    </div>
    <div class="auth_activate_button_timer" >Перенаправление через {{ timer }} сек.</div>

  </div>

</template>

<script>
import { mapState } from "vuex";
export default {


  computed: {
    ...mapState("login", ["errorStaleToken"]),
  },
  data() {
    return {
      timer: 6
    }
  },

  mounted() {
    this.startTimer()
  },

  methods: {
    pushToLogin () {
      this.$emit('timerStop')
      this.$router.push('/login')
    },
    startTimer() {
      setInterval (() => this.timer--, 1000)
    }
  }
}
</script>
