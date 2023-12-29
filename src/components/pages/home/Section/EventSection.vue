<template>
  <article class="event-container">
    <CardEvent
      v-for="(item, index) in props.eventData"
      :key="index"
      :type="item.type"
      :title="item.title"
      :detail="item.detail"
      :moreDetail="item.moreDetail"
    />
  </article>
</template>

<script setup lang="ts">
import CardEvent from '@/components/ui/card/CardEvent.vue'
import { type IEvent } from '../../../../interfaces/IEvents'

interface IProps {
  eventData: IEvent[]
}

const props = defineProps<IProps>()
</script>

<style scoped lang="scss">
.event-container {
  padding: 20px 0px;

  display: flex;
  gap: 20px;
}
</style>
