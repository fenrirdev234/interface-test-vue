<template>
  <section class="main-section">
    <article class="first-article">
      <nav class="main-nav">
        <a href="#"> Record Details </a><span> / </span>
        <a href="#">{{ dataEvents?.regID }}</a>
      </nav>
      <button class="main-icons">
        <span class="material-icons-round main-icon--size"> app_registration </span>
      </button>
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
  font-size: 14px;
  display: flex;
  gap: 4px;
  align-items: center;
}

.main-icons {
  height: 21px;
  margin: 10px;
}

.first-article {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-icon--size {
  font-size: 24px;

  font-weight: 400;
  line-height: 21px;
  color: $gray-1;
  @include pseudoActive;
}

.main-section {
  width: 100%;
}
</style>
