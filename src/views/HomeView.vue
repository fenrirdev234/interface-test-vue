<script setup lang="ts">
import MainHome from '@/components/pages/home/MainHome.vue'
import MainSide from '@/components/pages/home/MainSide.vue'

import GeneralLayout from '@/layout/GeneralLayout.vue'
</script>

<template>
  <GeneralLayout>
    <section class="container-home">
      <div class="grid-home">
        <aside class="side-home">
          <MainSide />
        </aside>
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
}
.side-home {
  grid-area: sideHome;
  display: none;
  padding: 15px;
}
.section-home {
  grid-area: SectionHome;
  padding: 15px;
}

@include mediaMin(720px) {
  .grid-home {
    grid-template-columns:
      minmax(auto, 320px)
      1fr;
    grid-template-rows: 1fr;

    grid-template-areas: 'sideHome SectionHome';
  }
  .side-home {
    display: block;
  }
}

@include mediaMin(960px) {
  .grid-home {
    grid-template-columns:
      minmax(auto, 390px)
      1fr;
  }
}

@include mediaMin(1600px) {
  .container-home {
    padding-left: 65px;
  }
}
</style>
