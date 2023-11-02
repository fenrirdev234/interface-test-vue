<script setup lang="ts">
import MainHome from '@/components/pages/home/MainHome.vue'

import GeneralLayout from '@/layout/GeneralLayout.vue'
</script>

<template>
  <GeneralLayout>
    <section class="container-home">
      <div class="grid-home">
        <aside class="side-home">asdsad</aside>
        <section class="section-home">
          <MainHome />
        </section>
      </div>
    </section>
  </GeneralLayout>
</template>

<style scoped lang="scss">
.container-home {
  height: 100%;
  width: 100%;
  max-width: 1600px;
}
.grid-home {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  grid-template-areas: 'SectionHome';
  padding: 8px;
}
.side-home {
  grid-area: sideHome;
  display: none;
}
.section-home {
  grid-area: SectionHome;
}

@include mediaMin(590px) {
  .grid-home {
    grid-template-columns:
      minmax(min(100%, 180px), 380px)
      1fr;
    grid-template-rows: 1fr;

    grid-template-areas: 'sideHome SectionHome';
    padding: 15px;
  }
  .side-home {
    display: block;
  }
}

@include mediaMin(1600px) {
  .container-home {
    padding-left: 65px;
  }
}
</style>
