<template>
  <section class="section-container">
    <slot />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.section-container {
  width: 100%;
  border-radius: 6px;
  background-color: $white-1;
  padding: 15px;
  @include shadowMix;
}
</style>
