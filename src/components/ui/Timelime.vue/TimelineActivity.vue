<template>
  <div>
    <header class="header-timeline">
      <h4 class="header-timeline__title">Timeline</h4>
      <div class="timeline__filter">
        <DropdownFilterVue
          v-if="timelimeFilter"
          :title="timelimeFilter.years.title"
          :data="timelimeFilter.years.data"
          @change-selected="filterTime($event)"
        />
        <DropdownFilterVue
          v-if="timelimeFilter"
          :title="timelimeFilter.users.title"
          :data="timelimeFilter.users.data"
          @change-selected="filterUser($event)"
        />

        <SearchInputVue @changeSearch="filterSearch($event)" />
      </div>
    </header>
    <section class="timeline__content">
      <div class="timeline__item">
        <TimelineContent :data="dataValue" v-if="dataValue" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import DropdownFilterVue from '../Dropdown/DropdownFilter.vue'
import SearchInputVue from '../SearchInput/SearchInput.vue'
import TimelineContent from './TimelineContent.vue'
import {
  type ITimelineData,
  type IFetchTimeline,
  type ITimelineFilter
} from '../../../interfaces/ITimeline'
import { ref, type Ref, onMounted } from 'vue'
import { useFetch } from '../../../hooks/useFetch'
import { API_ENDPOINTS } from '../../../services/endpoint'

const InitdataValue: Ref<ITimelineData[] | undefined> = ref([])
const dataValue: Ref<ITimelineData[] | null | undefined> = ref(null)
const timelimeFilter: Ref<ITimelineFilter | null | undefined> = ref(null)

const filterTime = (value: string) => {
  if (value.length > 0) {
    const timeData = InitdataValue.value?.filter((item) => item.time.year === value)
    dataValue.value = timeData
  } else {
    dataValue.value = InitdataValue.value
  }
}
const filterUser = (value: string) => {
  if (value.length > 0) {
    const userData = InitdataValue.value?.filter((item) => item.autor === value)
    dataValue.value = userData
  } else {
    dataValue.value = InitdataValue.value
  }
}
const filterSearch = (value: string) => {
  if (value.length > 0) {
    /* const userData = InitdataValue.value?.filter(
      (item) => item.autor.toLocaleLowerCase() === value.toLocaleLowerCase()
    ) */
    const userData = InitdataValue.value?.filter((item) => {
      return item.autor.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    })
    dataValue.value = userData
  } else {
    dataValue.value = InitdataValue.value
  }
}

onMounted(async () => {
  const { data } = await useFetch<IFetchTimeline>(API_ENDPOINTS.STUDENT_TIMELINE)

  InitdataValue.value = data.value?.data

  timelimeFilter.value = data.value?.filter
  dataValue.value = data.value?.data
})
</script>

<style scoped lang="scss">
.header-timeline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.timeline__filter {
  display: flex;
  gap: 11px;
  flex-wrap: wrap;
}
.header-timeline__title {
  color: $gray-1;
  font-weight: 600;
  font-size: 12px;
}

.timeline__content {
  width: 100%;
}
.timeline__item {
  display: flex;
  flex-direction: column;
}

@include mediaMin(420px) {
  .timeline__filter {
    flex-wrap: nowrap;
  }
}
</style>
