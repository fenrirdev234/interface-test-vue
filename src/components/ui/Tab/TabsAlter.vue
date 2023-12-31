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
  border-bottom: 1px solid $gray-6;
}

.tab-button {
  cursor: pointer;
  padding: 12px 15px;
  font-size: 14px;
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
    height: 3px;
    background-color: $violet-2;
    bottom: -1px;
    left: 0;
  }
}

@include mediaMin(520px) {
  .tab-button {
    padding: 15px 20px;
    font-size: 18px;
  }
}
</style>
