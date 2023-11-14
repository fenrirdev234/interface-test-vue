<template>
  <div class="timeline__container" v-for="(card_item, index) in props.data" :key="index">
    <div
      class="timeline-item-icon__content"
      :class="{
        'timeline-item-icon--none':
          props.data && index !== 0 && card_item.time?.month === props.data[index - 1].time?.month
      }"
    >
      <div :class="{ 'timeline-item-icon__line': index > 0 }" />
    </div>

    <p
      :class="{
        'timeline-item-icon--none':
          index !== 0 && props.data && card_item.time?.month === props.data[index - 1].time?.month
      }"
      class="timeline__month"
    >
      {{ card_item.time?.month }} {{ card_item.time?.year }}
    </p>

    <div class="timeline-item-icon__content">
      <div v-if="index > 0" class="timeline-item-icon__line--top" />

      <TimelineIcons :type="card_item.type" />
      <div
        v-if="props.data && index < props.data.length - 1"
        class="timeline-item-icon__line--bottom"
      />
    </div>
    <div class="timeline__item">
      <TimeLineCard
        :title="card_item.title"
        :from="card_item.from"
        :autor="card_item.autor"
        :time="card_item.time"
        :message="card_item.message"
        :link="card_item.link"
        :date="card_item.time?.date"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ITimelineData } from '../../../interfaces/ITimeline'

import TimeLineCard from './TimeLineCard.vue'
import TimelineIcons from './TimelineIcons.vue'

const props = defineProps({
  data: { type: Array<ITimelineData>, require: true }
})
</script>

<style scoped lang="scss">
.timeline__container {
  width: 100%;
  display: grid;
  grid-template-columns: 35px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'side main';
}

.timeline__item {
  grid-area: 'main';
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.timeline__month {
  grid-area: 'main';
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 12px;
  color: $violet-2;
  font-weight: 600;
}
.timeline-item-icon__line {
  width: 2px;
  height: 100%;
  background-color: $gray-5;
  justify-content: center;
}
.timeline-item-icon__line--top {
  width: 2px;
  height: 50%;
  top: 0;
  background-color: $gray-5;
  position: absolute;
}
.timeline-item-icon__line--bottom {
  width: 2px;
  height: 50%;
  background-color: $gray-5;
  position: absolute;

  bottom: 0;
}

.timeline-item-icon__content {
  position: relative;
  grid-area: 'side';
  display: flex;
  align-items: center;
  width: 24px;
  justify-content: center;
  font-size: 12px;
}
.timeline-item-icon--none {
  display: none;
}
.timeline-item-icon {
  border: 2px solid;
  border-color: $gray-5;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-color: $violet-2;

  z-index: 1;
}
</style>
