import { ref, type Ref } from 'vue'

export const useFetch = async <T>(url: string, options?: Record<string, unknown>) => {
  const isLoading: Ref<boolean> = ref(false)
  const hasError: Ref<boolean> = ref(false)
  const errorMessage: Ref<string> = ref('')
  const data: Ref<T | null> = ref(null)

  const fetchdata = async () => {
    isLoading.value = true

    try {
      const response = await fetch(url, options)

      if (!response.ok) {
        throw new Error(response.statusText)
      }
      data.value = await response.json()
    } catch (error) {
      const typedError = error as Error
      hasError.value = true
      errorMessage.value = typedError.message
    } finally {
      isLoading.value = false
    }
  }
  await fetchdata()

  return {
    isLoading,
    hasError,
    errorMessage,
    data
  }
}
