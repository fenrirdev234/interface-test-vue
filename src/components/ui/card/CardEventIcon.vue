<template>
  <div class="card-event__icon">
    <span
      class="card-event-icon--size"
      :class="{
        'material-icons-round': props.type !== 'activity',
        'material-icons': props.type === 'activity'
      }"
    >
      {{ StringIcon(props.type) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { type IEventType } from '../../../interfaces/IEvents'
import { StringIcon } from '../../../lib/StringIcon'

const props = defineProps<IEventType>()
</script>

<style scoped lang="scss">
.card-event__icon {
  width: 40px;
  height: 40px;
  background-color: $green-2;
  border-radius: 50%;
  color: $white-1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-event-icon__container {
  width: 20px;
}

.card-event-icon--size {
  font-weight: 400;
  font-size: 25px;
}
</style>
