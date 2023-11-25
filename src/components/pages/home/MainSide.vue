<template>
  <VueOverlayScollbarVue>
    <div class="side-container" v-if="dataInfo">
      <InfoSection :infoData="dataInfo.infoData" />
      <StudentSection :studentData="dataInfo.studentData" />
      <AboutSectionVue :aboutData="dataInfo.aboutData" />
      <CareerSectionVue :carrerData="dataInfo.carrerData" />
      <ManageSection />
    </div>
  </VueOverlayScollbarVue>
</template>

<script setup lang="ts">
import AboutSectionVue from './Section/AboutSection.vue'
import CareerSectionVue from './Section/CareerSection.vue'
import InfoSection from './Section/InfoSection.vue'
import ManageSection from './Section/ManageSection.vue'
import StudentSection from './Section/StudentSection.vue'
import VueOverlayScollbarVue from '@/lib/vueOverlayScrollbar/VueOverlayScollbar.vue'
import { useFetch } from '../../../hooks/useFetch'
import { API_ENDPOINTS } from '../../../services/endpoint'
import { type IStudentInfo } from '../../../interfaces/IStudentInfo'
import { ref, onMounted, type Ref } from 'vue'

const dataInfo: Ref<IStudentInfo | undefined | null> = ref(null)

onMounted(async () => {
  const { data } = await useFetch<IStudentInfo>(API_ENDPOINTS.STUDENT)
  dataInfo.value = data.value
})
</script>

<style
  scoped
  lang="scss
"
>
.side-container{
width: 100%;
  display:flex;
  position: absolute;
flex-direction: column;
gap: 10px;
}
</style>
