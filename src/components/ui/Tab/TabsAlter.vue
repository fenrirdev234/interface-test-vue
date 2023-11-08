<template>
  <div>
    <ul class="tabs-flex">
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
        {{ tab?.title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { type ITab } from '@/interfaces/ITab'
import { ref, type Ref, provide } from 'vue'

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
  justify-content: center;
}

.tab-button {
  cursor: pointer;
  padding: 14px;

  font-size: 14px;
  font-weight: 600;
  color: $gray-1;
  opacity: 0.4;
}
.tab-button__active {
  opacity: 1;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: $violet-2;
    bottom: 0;
    left: 0;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: $violet-2;
    z-index: 2;
    bottom: -3px;
    left: 0;
  }
}

tab-button__active .tab-butto_desactive {
  opacity: 0.4;
}
</style>
