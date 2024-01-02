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
  display: flex;
  justify-content: end;
}
.grid-home {
  max-width: 1535px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  padding: 15px;

  height: 100%;
  grid-template-areas: 'SectionHome';
}
.side-home {
  grid-area: sideHome;
  display: none;
}
.section-home {
  grid-area: SectionHome;

  width: 100%;
  height: 100%;
}

@include mediaMin(840px) {
  .grid-home {
    grid-template-columns:
      minmax(auto, 280px)
      1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'sideHome SectionHome';
    gap: 15px;
  }
  .side-home {
    display: block;
  }
}

@include mediaMin(960px) {
  .grid-home {
    grid-template-columns:
      minmax(auto, 375px)
      1fr;
    gap: 15px;
  }
}
</style>
