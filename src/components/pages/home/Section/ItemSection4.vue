<template>
  <li class="about-item">
    <p>{{ props.title }}:</p>
    <p>{{ props.content }}</p>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ' '
  },
  content: {
    type: String,
    default: ' '
  }
})
</script>

<style scoped lang="scss">
.about-item {
  font-size: 12px;
  color: $gray-1;
  line-height: normal;
}
</style>
