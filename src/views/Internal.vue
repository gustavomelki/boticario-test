<template>
  <div class="internal">
    <app-header />
    <main class="container">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
export default {
<<<<<<< HEAD
  name: "Internal",
=======
  name: "Dashboard",
>>>>>>> 935b4a0ec71a2030f7513cbb8954005af36c0baa
  components: {
    AppFooter,
    AppHeader
  }
};
</script>
