import { useToast } from 'vue-toastification'

export const toastCopyMessage = (message: string, value?: string) => {
  const toast = useToast()
  value && navigator.clipboard.writeText(value)
  toast(message, {
    //@ts-ignore:next-line
    position: 'top-center'
  })
}
