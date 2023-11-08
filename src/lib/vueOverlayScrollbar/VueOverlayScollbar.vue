<template>
  <OverlayScrollbarsComponent
    :options="{
      scrollbars: {
        theme: 'os-theme-light'
      }
    }"
    class="scroll__lib"
  >
    <slot></slot>
  </OverlayScrollbarsComponent>
</template>

<script setup lang="ts">
import 'overlayscrollbars/styles/overlayscrollbars.css'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'
</script>

<style scoped>
.scroll__lib {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
