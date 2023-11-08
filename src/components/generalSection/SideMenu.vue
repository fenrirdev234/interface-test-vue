<template>
  <section class="menu">
    <nav class="menu-container">
      <ul class="menu-list">
        <SideBottonVue :weigth="true" name="Dashboard" icon="dashboard" :active="true" />
        <SideBottonVue :weigth="true" name="Smart Enroller" icon="smart-enroller" :active="false" />
        <SideBottonVue :weigth="true" name="Dropout Shield" icon="dropout-shield" :active="false" />
        <SideBottonVue
          :weigth="false"
          name="Retention Partner"
          icon="retention-partner"
          :active="false"
        />
        <SideBottonVue :weigth="true" name="Risk Detector" icon="risk-detector" :active="false" />
        <SideBottonVue name="Academy Offer" icon="academy-offer" :active="false" :weigth="true" />
        <SideBottonVue name="My report" icon="my-report" :active="false" :weigth="true" />
        <SideBottonVue name="custom Report" icon="custom-report" :weigth="false" :active="false" />
        <SideBottonVue name="Workflows" icon="workflows" :active="false" :weigth="false" />
      </ul>
    </nav>
  </section>
</template>

<script setup lang="ts">
import SideBottonVue from '../ui/sideBar/SideBotton.vue'
</script>

<style scoped lang="scss">
.menu {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05));
  background-color: $white-1;
}
.menu-container {
  position: sticky;
  display: flex;
  width: 100%;

  background-color: $white-1;

  /* top: 0;
  bottom: 0; */
}
.menu-list {
  padding: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  background-color: $white-1;
  height: 100%;
}
</style>
