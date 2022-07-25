<template>
  <div class="internal">
    <app-header />
    <main class="internal__container container">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
export default {
  name: "Internal",
  components: {
    AppFooter,
    AppHeader
  }
};
</script>
