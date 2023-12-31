<template>
  <div v-if="props.type === 'tag'" class="item__tag" />
  <div v-else class="timeline-item-icon">
    <span class="material-icons-round timeline-item-icon--size">
      {{ StringIcon(props.type) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { type ITimelineIcon } from '../../../interfaces/ITimeline'
import { StringIcon } from '../../../lib/StringIcon'

const props = defineProps<ITimelineIcon>()
</script>

<style scoped lang="scss">
.timeline-item-icon {
  border: 2px solid;
  border-color: $gray-5;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background-color: $violet-2;
  z-index: 1;
  color: $white-1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item__tag {
  border: 1px solid;
  border-color: $gray-5;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background-color: $violet-2;
  z-index: 1;
  color: $white-1;
}

.timeline-item-icon--size {
  font-size: 12px;
  font-weight: 400;
}
</style>
