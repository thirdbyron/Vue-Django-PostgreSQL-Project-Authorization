<template>
  <div
    class="auth_submit_button"
    @click="$emit('signInUser')"
    
  >
    Войти
  </div>
</template>

<style lang="scss">

</style>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("login", ["activeAuthTab", "userData"]),
  },

  
};
</script>