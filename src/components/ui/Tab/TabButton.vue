<template>
  <div class="tab-button__container">
    <template v-if="props.type && props.type !== 'none'">
      <span class="material-icons-round tab-button__icon--size">
        {{ StringIcon(props.type) }}
      </span>
    </template>
    <p class="tab-button__title">
      {{ props.title }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { StringIcon } from '@/lib/StringIcon'
import { type ITabBottom } from '../../../interfaces/ITab'

const props = withDefaults(defineProps<ITabBottom>(), {
  title: '',
  type: 'none'
})
</script>

<style scoped lang="scss">
.tab-button__container {
  color: $gray-1;
  display: flex;

  gap: 10px;
}
.tab-button__title {
  font-size: 16px;
  line-height: 21px;
}
.tab-button__icon {
  width: 20px;
}
.tab-button__icon--size {
  font-size: 24px;

  font-weight: 400;
  line-height: 21px;
}
</style>
