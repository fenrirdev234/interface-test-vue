<template>
  <div class="search-container">
    <input placeholder="Search..." class="search-input" />
    <div class="search-icon">
      <IconSearchVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconSearchVue from '@/components/icons/homeIcons/IconSearch.vue'
</script>

<style scoped lang="scss">
.search-container {
  display: flex;
  border: 2px solid $gray-6;
  border-radius: 5px;
  align-items: center;
  padding-left: 14px;
  padding-right: 16px;

  width: 242px;
}
.search-input {
  width: 100%;
  font-size: 9px;
}
.search-icon {
  width: 12xp;
  height: 12px;
}

@include mediaMin(480px) {
  /* .search-container {
    width: 242px;
  } */
}

@include mediaMin(1200px) {
  .search-container {
    width: 242px;
  }
}
</style>
