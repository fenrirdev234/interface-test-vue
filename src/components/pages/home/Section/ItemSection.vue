<template>
  <li class="about-item">
    <p class="about-item__title">{{ props.title }}:</p>
    <p class="about-item__content">{{ props.content }}</p>
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
}

.about-item__content {
  line-height: 17px;
}
</style>
