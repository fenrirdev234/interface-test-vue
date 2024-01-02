<template>
  <OverlayScrollbarsComponent
    class="scroll__lib"
    :options="{
      scrollbars: {
        theme: 'os-theme-dark'
      }
    }"
  >
    <slot></slot>
  </OverlayScrollbarsComponent>
</template>

<script setup lang="ts">
import 'overlayscrollbars/styles/overlayscrollbars.css'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'
</script>

<style scoped lang="scss">
.scroll__lib {
  width: 100%;
  height: 100%;
  position: relative;
  @include scrollbarStyle;
}
</style>
