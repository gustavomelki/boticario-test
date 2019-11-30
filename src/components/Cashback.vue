<template>
  <div class="cashback">
    <span class="cashback__label">{{ label }}</span>
    <span class="cashback__value">{{ value }}</span>
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
    value: {
      required: true,
      type: String
    }
  }
};
</script>
