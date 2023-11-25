<template>
  <section class="main-section">
    <article class="first-article">
      <nav class="main-nav">
        <a> Record Details </a><span> / </span>
        <a>{{ dataEvents?.regID }}</a>
      </nav>
      <div class="main-icons">
        <IconEditVue />
      </div>
    </article>
    <TabsAlter>
      <TabAlter title="Overview">
        <EventSection v-if="dataEvents" :eventData="dataEvents.event" />
      </TabAlter>
      <TabAlter title="Enrollment"></TabAlter>
      <TabAlter title="Academic"></TabAlter>
    </TabsAlter>
    <OverviewSection />
  </section>
</template>

<script setup lang="ts">
import TabsAlter from '@/components/ui/Tab/TabsAlter.vue'

import TabAlter from '@/components/ui/Tab/TabAlter.vue'

import IconEditVue from '@/components/icons/homeIcons/IconEdit.vue'
import OverviewSection from './Section/OverviewSection.vue'
import EventSection from './Section/EventSection.vue'
import { onMounted, ref, type Ref } from 'vue'
import { useFetch } from '../../../hooks/useFetch'
import { type IEvents } from '../../../interfaces/IEvents'
import { API_ENDPOINTS } from '../../../services/endpoint'

const dataEvents: Ref<IEvents | null> = ref(null)

onMounted(async () => {
  const { data } = await useFetch<IEvents>(API_ENDPOINTS.EVENT)

  dataEvents.value = data.value
})
</script>

<style scoped lang="scss">
.main-nav {
  color: $violet-2;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  gap: 4px;
}
.first-article {
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
  padding-right: 13px;
  padding-bottom: 14px;
}
.main-icons {
  width: 16px;
  height: 16px;
  color: $gray-1;
  @include pseudoActive;
}

.main-section {
  width: 100%;
}
</style>
