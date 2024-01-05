<template>
  <div class="search-container">
    <input type="text" v-model="searchText" placeholder="Search..." class="search-input" />
    <span class="material-icons-round search-icon--size"> search </span>
  </div>
</template>

<script setup lang="ts">
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
  border: 1px solid $gray-6;
  border-radius: 5px;
  align-items: center;
  padding: 7px 15px;

  width: 100%;
  max-width: 140px;
}
.search-input {
  width: 100%;
  font-size: 12px;
  color: $gray-1;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;

  &:focus {
    outline: none;
  }
}

.search-icon--size {
  font-size: 16px;
  color: $gray-1;
  font-weight: 400;
  line-height: 24px;
  width: 16px;
  height: 24px;
}
@include mediaMin(1200px) {
  .search-container {
    max-width: 243px;
  }
}
</style>
