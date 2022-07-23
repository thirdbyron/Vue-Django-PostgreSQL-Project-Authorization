<template>
  <div
    class="auth_slider_buttons"
    :class="{ auth_slider_signin_active: activeAuthTab === 'signin' }"
    @click="changeAuthTab('signin')"
  >
    Вход
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
.auth_slider_signin_active {
 font-family: $cr;
 font-weight: 200;
}
</style>