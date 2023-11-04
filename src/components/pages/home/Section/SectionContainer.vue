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
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
