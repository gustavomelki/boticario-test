<template>
  <div id="app" class="app-container">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["fetchAccessToken"])
  },
  created() {
    this.fetchAccessToken();
  }
};
</script>

<style lang="sass">
@import "./sass/main"
</style>
