<template>
  <template v-if="props.type === 'call'">
    <div class="timeline-item-icon">
      <div class="timeline-item-icon__container">
        <IconPhoneVue />
      </div>
    </div>
  </template>
  <template v-if="props.type === 'email'">
    <div class="timeline-item-icon">
      <div class="timeline-item-icon__container">
        <IconMessage />
      </div>
    </div>
  </template>
  <template v-if="props.type === 'academy'">
    <div class="timeline-item-icon">
      <div class="timeline-item-icon__container">
        <IconEduc />
      </div>
    </div>
  </template>
  <template v-if="props.type === 'chat'">
    <div class="timeline-item-icon">
      <div class="timeline-item-icon__container">
        <IconChat />
      </div>
    </div>
  </template>
  <template v-if="props.type === 'tag'">
    <div class="item__tag" />
  </template>
</template>

<script setup lang="ts">
import IconPhoneVue from '@/components/icons/homeIcons/IconPhone.vue'
import { type ITimelineIcon } from '../../../interfaces/ITimeline'
import IconMessage from '@/components/icons/homeIcons/IconMessage.vue'
import IconEduc from '@/components/icons/menuIcons/IconEduc.vue'
import IconChat from '@/components/icons/homeIcons/IconChat.vue'

const props = defineProps<ITimelineIcon>()
</script>

<style scoped lang="scss">
.timeline-item-icon {
  border: 2px solid;
  border-color: $gray-5;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-color: $violet-2;
  z-index: 1;
  color: $white-1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.timeline-item-icon__container {
  width: 10px;
}
.item__tag {
  border: 2px solid;
  border-color: $gray-5;
  border-radius: 50%;
  width: 11px;
  height: 11px;
  background-color: $violet-2;
  z-index: 1;
  color: $white-1;
}
</style>
