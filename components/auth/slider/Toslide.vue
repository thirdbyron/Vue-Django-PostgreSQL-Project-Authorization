<template>
  <div class="slider_toslide " :class="{slider_toslide_left: activeAuthTab === 'signin',slider_toslide_right: activeAuthTab === 'register'}" >
    <div></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
    ...mapState("login", ["activeAuthTab"]),
  },
}
</script>

<style lang="scss">
.slider_toslide {
height: 100%;
  border-radius: 20px;
   width: 50%;
   background-color: rgba(70, 129, 255, 0.5);
    position: absolute;
  justify-self: start;
  @include inner_shadow;
}
.slider_toslide_left {
  transform: translate(0%, 0px);
  transition-duration: 0.5s;
}
.slider_toslide_right {
  transform: translate(100%, 0px);
  transition-duration: 0.5s;
}
</style>