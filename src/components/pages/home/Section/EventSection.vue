<template>
  <article class="event-container">
    <CardEvent
      v-for="(item, index) in data"
      :key="index"
      :type="item.type"
      :title="item.title"
      :detail="item.detail"
      :moreDetail="item.moreDetail"
    />

    <!-- <CardEvent
      v-for="(item, index) in data"
      :key="index"
      :type="item.type"
      :title="item.title"
      :detail="item.detail"
      :moreDetail="item.moreDetail"
    /> -->
  </article>
</template>

<script setup lang="ts">
import CardEvent from '@/components/ui/card/CardEvent.vue'

import '@egjs/vue3-flicking/dist/flicking.css'
const data = [
  {
    type: 'activity',
    title: '7 days ago',
    detail: 'Nov 29, 2023',
    moreDetail: '2:43pm'
  },
  {
    type: 'contact',
    title: '2 days ago',
    detail: 'Nov 29, 2023',
    moreDetail: '2:43pm'
  },
  {
    type: 'country',
    title: 'México',
    detail: 'State',
    moreDetail: 'Córdoba'
  },
  {
    type: 'status',
    title: 'Active',
    detail: 'updated',
    moreDetail: 'Nov 2, 2023'
  },
  {
    type: 'age',
    title: '12 days',
    detail: 'Created on',
    moreDetail: 'Jan 2, 2023'
  }
]
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
