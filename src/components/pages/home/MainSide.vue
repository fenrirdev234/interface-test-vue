<template>
  <div class="side-scrollbar">
    <MainSideSkeleton v-if="loading && !dataInfo" />
    <div class="side-container" v-else-if="dataInfo">
      <InfoSection :infoData="dataInfo.infoData" />
      <StudentSection :studentData="dataInfo.studentData" />
      <AboutSectionVue :aboutData="dataInfo.aboutData" />
      <CareerSectionVue :carrerData="dataInfo.carrerData" />
      <ManageSection />

      <StudentSection :studentData="dataInfo.studentData" />
      <AboutSectionVue :aboutData="dataInfo.aboutData" />
      <CareerSectionVue :carrerData="dataInfo.carrerData" />
      <ManageSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutSectionVue from './Section/AboutSection.vue'
import CareerSectionVue from './Section/CareerSection.vue'
import InfoSection from './Section/InfoSection.vue'
import ManageSection from './Section/ManageSection.vue'
import StudentSection from './Section/StudentSection.vue'

import { useFetch } from '../../../hooks/useFetch'
import { API_ENDPOINTS } from '../../../services/endpoint'
import { type IStudentInfo } from '../../../interfaces/IStudentInfo'
import { ref, onMounted, type Ref } from 'vue'
import MainSideSkeleton from './SkeletonSection/MainSideSkeleton.vue'

const dataInfo: Ref<IStudentInfo | undefined | null> = ref(null)

const loading: Ref<boolean> = ref(true)
onMounted(async () => {
  const { data, isLoading } = await useFetch<IStudentInfo>(API_ENDPOINTS.STUDENT)
  dataInfo.value = data.value
  loading.value = isLoading.value
})
</script>

<style scoped lang="scss">
.side-container {
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 10px;
  padding-right: 5px;
}
.side-scrollbar {
  width: 100%;
  position: relative;
  height: 100%;
  max-height: 100%;

  overflow-y: scroll;
  @include scrollbarStyle;
}
</style>
