<template>
  <div class="search-container">
    <input type="text" v-model="searchText" placeholder="Search..." class="search-input" />
    <div class="search-icon">
      <IconSearchVue />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconSearchVue from '@/components/icons/homeIcons/IconSearch.vue'
import { ref, type Ref, watch } from 'vue'
const searchText: Ref<string> = ref('')

const emit = defineEmits<{ changeSearch: [value: string] }>()

watch(searchText, () => {
  emit('changeSearch', searchText.value)
})
</script>

<style scoped lang="scss">
.search-container {
  display: flex;
  justify-content: space-between;
  border: 2px solid $gray-6;
  border-radius: 5px;
  align-items: center;
  padding-left: 14px;
  padding-right: 16px;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 100%;
  max-width: 140px;
}
.search-input {
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  color: $gray-1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:focus {
    outline: none;
  }
}
.search-icon {
  width: 12xp;
  height: 12px;
}

@include mediaMin(1200px) {
  .search-container {
    max-width: 242px;
  }
}
</style>
