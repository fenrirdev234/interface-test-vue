<template>
  <VueOverlayScollbarVue>
    <div class="side-container">
      <InfoSection />
      <StudentSection />
      <AboutSectionVue />
      <CareerSectionVue />
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
</script>

<style
  scoped
  lang="scss
"
>
.side-container{

  display:flex;
  position: absolute;
flex-direction: column;
gap: 10px;
}
</style>
