<template>
  <div
    class="auth_slider_buttons"
    @click="changeAuthTab('register')"
    :class="{ auth_slider_register_active: activeAuthTab === 'register' }"
  >
    Регистрация
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("login", ["activeAuthTab"]),
  },
  methods: {
    ...mapMutations("login", ["changeAuthTab"]),
  },
};
</script>

<style lang="scss">
.auth_slider_register_active {
  
  font-family: $cr;
}
</style>