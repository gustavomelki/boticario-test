<template>
  <div class="cashback">
    <span class="cashback__label">{{ label }}</span>
    <div class="cashback__value">
      <app-loading class="cashback__loading" v-if="loading" />
      <span v-if="!loading">{{ value }}</span>
    </div>
  </div>
</template>

<script>
import AppLoading from "@/components/AppLoading.vue";
export default {
  name: "Cashback",
  components: {
    AppLoading
  },
  data() {
    return {
      loading: true
    };
  },
  props: {
    label: {
      required: true,
      type: String
    },
    value: {
      required: true,
      type: String
    }
  },
  watch: {
    value(data) {
      if (data.length) this.loading = false;
    }
  }
};
</script>
