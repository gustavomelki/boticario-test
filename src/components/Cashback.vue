<template>
  <div class="cashback">
    <span class="cashback__label">{{ label }}</span>
    <span class="cashback__value">{{ loading ? "carregando..." : value }}</span>
  </div>
</template>

<script>
export default {
  name: "Cashback",
  props: {
    label: {
      required: true,
      type: String
    },
    loading: {
      default: false,
      type: Boolean
    },
    value: {
      required: true,
      type: String
    }
  }
};
</script>
