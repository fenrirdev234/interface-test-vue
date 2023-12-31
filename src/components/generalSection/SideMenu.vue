<template>
  <section class="menu">
    <nav class="menu-container">
      <button
        class="menu-position"
        :class="{
          'menu-shadow': collapsed.isColapsed === true
        }"
        ref="target"
      >
        <ul class="menu-list">
          <SideBottonVue
            :weigth="false"
            name="Dashboard"
            icon="dashboard"
            :active="route.path === '/'"
          />
          <SideMore />
          <SideBottonVue
            :weigth="true"
            name="Smart Enroller"
            icon="smart-enroller"
            :active="false"
          />
          <SideBottonVue
            :weigth="true"
            name="Dropout Shield"
            icon="dropout-shield"
            :active="false"
          />
          <SideBottonVue
            :weigth="false"
            name="Retention Partner"
            icon="retention-partner"
            :active="false"
          />
          <AccordionMenuVue
            :weigth="true"
            name="Risk Detector"
            icon="risk-detector"
            :active="false"
            :items="['My Reports', 'My Reports', 'My Reports']"
          />

          <AccordionMenuVue
            name="Academy Offer"
            icon="academy-offer"
            :active="false"
            :weigth="true"
            :items="['My Reports', 'My Reports', 'My Reports']"
          />

          <SideBottonVue name="My report" icon="my-report" :active="false" :weigth="true" />
          <SideBottonVue
            name="custom Report"
            icon="custom-report"
            :weigth="false"
            :active="false"
          />
          <SideBottonVue name="Workflows" icon="workflows" :active="false" :weigth="false" />
        </ul>
      </button>
    </nav>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import SideBottonVue from '../ui/sideBar/SideBotton.vue'
import AccordionMenuVue from '@/components/ui/Accordion/AccordionMenuVue.vue'
import { useCollapsedStore } from '../../stores/isCollapsed'
import { onClickOutside } from '@vueuse/core'

import SideMore from '../ui/sideBar/SideMore.vue'

const target = ref(null)
const collapsed = useCollapsedStore()
const route = useRoute()

onClickOutside(target, () => closeMenu())

const closeMenu = () => {
  collapsed.toggleCloseSidebar()
}
</script>

<style scoped lang="scss">
.menu {
  width: 100%;
  height: 100%;

  background-color: $white-1;
}

.menu-shadow {
  box-shadow: 4px 0px 15px 0px rgba(0, 0, 0, 0.15);
}
.menu-container {
  display: flex;

  height: 100%;
  background-color: $white-1;

  /* top: 0;
  bottom: 0; */
}

.menu-position {
  height: 100%;
  background-color: $white-1;
  display: flex;
}
.menu-list {
  top: 0;
  height: min-content;
  padding: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
}
</style>
