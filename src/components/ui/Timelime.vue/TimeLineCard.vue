<template>
  <div class="timeline__card">
    <div class="timeline__name">
      <h5>
        <span class="timeline__title">{{ props.title }} </span>
        <span v-if="props.from"> from {{ props.from }} </span>
        <span v-if="props.autor"> by {{ props.autor }} </span>
      </h5>
      <p>
        {{ props.date }}
      </p>
    </div>
    <div v-if="props.message" class="timeline__message">
      <span>
        {{ props.message }}
      </span>
      <a v-if="props.link && props.link.length > 0"> View Email</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type ITimelineCard from '../../../interfaces/ITimeline'
const props = defineProps<ITimelineCard>()
</script>

<style scoped lang="scss">
.timeline__card {
  width: 100%;
  background-color: $gray-8;
  border-radius: 5px;
  padding: 12px 10px;
  font-size: 10px;
  font-weight: 700;
}

.timeline__title {
  color: $violet-2;
}
.timeline__name {
  color: $gray-1;
  display: flex;
  justify-content: space-between;
}
.timeline__message {
  color: $gray-2;
  padding-top: 16px;
  display: flex;
  white-space: pre-line;
  line-height: 15px;
}

.timeline__message a {
  color: $violet-2;
}
</style>
