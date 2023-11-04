<template>
  <div class="side-container">
    <InfoSection />
    <StudentSection />
    <AboutSectionVue />
    <CareerSectionVue />
  </div>
</template>

<script setup lang="ts">
import AboutSectionVue from './Section/AboutSection.vue'
import CareerSectionVue from './Section/CareerSection.vue'
import InfoSection from './Section/InfoSection.vue'
import StudentSection from './Section/StudentSection.vue'
</script>

<style
  scoped
  lang="scss
"
>
.side-container{
  display:flex;
flex-direction: column;
gap: 10px;
}
</style>
