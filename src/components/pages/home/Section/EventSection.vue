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

<style scoped>
.event-container {
  width: 100%;
  padding-top: 20px;
  padding-bottom: 30px;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
}
</style>
