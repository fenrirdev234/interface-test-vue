<template>
  <div class="border-4 border-black rounded">
    <ul class="flex flex-nowrap justify-between tabs-flex">
      <li
        class="tab-button"
        :class="{
          'tab-button__desactive': tab?.hash !== activeTabHash,
          'tab-button__active': tab?.hash === activeTabHash
        }"
        v-for="tab in tabs"
        :key="tab?.title"
        @click="activeTabHash = tab.hash"
      >
        <TabButton :title="tab?.title" :type="tab?.type" />
      </li>
    </ul>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { type ITab } from '@/interfaces/ITab'
import { ref, type Ref, provide } from 'vue'
import TabButton from './TabButton.vue'

const activeTabHash: Ref<string> = ref('')
const tabs: Ref<ITab[]> = ref([])

provide('addTab', (tab: ITab) => {
  const count = tabs.value.push(tab)

  if (count === 1) {
    activeTabHash.value = tab.hash
  }
})

provide('activeTabHash', activeTabHash)
</script>

<style scoped lang="scss">
.tabs-flex {
  display: flex;
  gap: 1px;
}

.tab-button {
  background-color: $white-1;
  cursor: pointer;
  padding: 14px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: $gray-1;
  opacity: 0.4;
}
.tab-button__active {
  opacity: 1;
}
.tab-butto_desactive {
  opacity: 0.4;
}
</style>
