<template>
  <section class="section-contanier">
    <slot />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.section-contanier {
  width: 100%;
  border-radius: 6px;
  background-color: $white-1;
  padding: 15px;
  @include shadowMix;
}
</style>
