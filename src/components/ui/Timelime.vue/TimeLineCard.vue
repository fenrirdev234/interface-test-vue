<template>
  <div class="timeline__card">
    <div class="timeline__name">
      <h5>
        <span class="timeline__title">{{ props.title }} </span>
        <span v-if="props.from"> from {{ props.from }} </span>
        <span v-if="props.autor"> by {{ props.autor }} </span>
      </h5>
      <p class="timeline__date">
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
import { type ITimelineCard } from '../../../interfaces/ITimeline'
const props = defineProps<ITimelineCard>()
</script>

<style scoped lang="scss">
.timeline__card {
  width: 100%;
  background-color: $gray-8;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  font-size: 12px;
  margin: 2.5px 0px;
}

.timeline__title {
  color: $violet-2;
}
.timeline__name {
  color: $gray-1;
  display: flex;
  justify-content: space-between;
}
.timeline__date {
  color: $gray-2;
}
.timeline__message {
  color: $gray-2;
  display: flex;
  white-space: pre-line;
  line-height: 21px;
}

.timeline__message a {
  margin-left: 5px;
  color: $violet-2;
}
</style>
