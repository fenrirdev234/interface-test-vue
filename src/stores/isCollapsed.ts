import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useCollapsedStore = defineStore('collapsed', () => {
  const isColapsed: Ref<boolean> = ref(false)

  const toggleOpenSidebar = () => {
    isColapsed.value = true
  }
  const toggleCloseSidebar = () => {
    isColapsed.value = false
  }

  return {
    isColapsed,
    toggleOpenSidebar,
    toggleCloseSidebar
  }
})
