<script setup lang="ts">
import { inject, ref, type Ref, onBeforeMount, watch } from 'vue'
import { type ITab, type ITabBottom } from '../../../interfaces/ITab'

const addTab = inject('addTab') as (tab: ITab) => void
const activeTabHash = inject('activeTabHash') as Ref<string>

const props = withDefaults(defineProps<ITabBottom>(), {
  title: '',
  type: 'none'
})

const hash: Ref<string> = ref('')
const isActive: Ref<boolean> = ref(false)

onBeforeMount(() => {
  hash.value = `#${props.title.toLowerCase().replace(/ /g, '-')}`

  addTab({
    title: props.title,
    hash: hash.value,
    type: props.type
  })
})

watch(activeTabHash, () => {
  isActive.value = activeTabHash.value === hash.value
})
</script>

<template>
  <div class="tab-container" v-show="isActive">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.tab-container {
  padding: 15px;
  background-color: $white-1;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
</style>
