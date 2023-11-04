<template>
  <li class="about-item">
    <p class="about-item__title">{{ props.title }}:</p>
    <p>{{ props.content }}</p>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    title: String,
    default: ' '
  },
  content: {
    title: String,
    default: ' '
  }
})
</script>

<style scoped lang="scss">
.about-item {
  font-size: 12px;
  font-weight: 600;
  color: $gray-1;
}
.about-item__title {
  padding-bottom: 6px;
}
</style>
