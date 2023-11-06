<template>
  <div class="tab-button__container">
    <div v-if="props.type && props.type !== 'none'" class="tab-button__icon">
      <template v-if="props.type === 'email'">
        <IconMessage />
      </template>
      <template v-if="props.type === 'call'">
        <IconPhone />
      </template>
    </div>
    <p>
      {{ props.title }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { type ITabBottom } from '../../../interfaces/ITab'
import IconMessage from '@/components/icons/homeIcons/IconMessage.vue'
import IconPhone from '@/components/icons/homeIcons/IconPhone.vue'

const props = withDefaults(defineProps<ITabBottom>(), {
  title: '',
  type: 'none'
})
</script>

<style scoped lang="scss">
.tab-button__container {
  font-size: 14px;
  font-weight: 600;
  color: $gray-1;
  display: flex;
  gap: 12px;
}
.tab-button__icon {
  width: 20px;
}
</style>
