<script setup lang="ts">
import { inject, ref, type Ref, onBeforeMount, watch } from 'vue'
import { type ITabProps } from '../../../interfaces/ITab'

const addTab = inject('addTab') as (tab: ITabProps) => void
const activeTabHash = inject('activeTabHash') as Ref<string>

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const hash: Ref<string> = ref('')
const isActive: Ref<boolean> = ref(false)

onBeforeMount(() => {
  hash.value = `#${props.title.toLowerCase().replace(/ /g, '-')}`

  addTab({
    title: props.title,
    hash: hash.value
  })
})

watch(activeTabHash, () => {
  isActive.value = activeTabHash.value === hash.value
})
</script>

<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>
