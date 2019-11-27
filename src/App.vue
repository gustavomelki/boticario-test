<template>
  <div id="app" class="app-container">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="sass">
@import "./sass/main"
</style>
