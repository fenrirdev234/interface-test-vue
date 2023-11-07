<template>
  <section class="menu">
    <nav class="menu-container">
      <ul class="menu-list">
        <SideBottonVue name="Dashboard" icon="dashboard" :active="true" />
        <SideBottonVue name="Smart Enroller" icon="smart-enroller" :active="false" />
        <SideBottonVue name="Dropout Shield " icon="dropout-shield" :active="false" />
        <SideBottonVue name="Risk Detector" icon="risk-detector" :active="false" />
        <SideBottonVue name="Academy Offer" icon="academy-offer" :active="false" />
        <SideBottonVue name="My report" icon="my-report" :active="false" />
        <SideBottonVue name="custom Report" icon="custom-report" :active="false" />
        <SideBottonVue name="Workflows" icon="workflows" :active="false" />
      </ul>
    </nav>
  </section>
</template>

<script setup lang="ts">
import SideBottonVue from '../ui/sideBar/SideBotton.vue'
</script>

<style scoped lang="scss">
.menu {
  position: relative;
  width: 100%;
  height: 100%;
}
.menu-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: $white-1;
  overflow-y: scroll;
}
.menu-list {
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.menu-items {
  width: 45px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05));
}

.menu-items--bg-none {
  width: 45px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: end;
  border-radius: 4px;
  color: $gray-1;
}
.menu-items--active {
  background-color: $violet-1;
  color: $white-1;
}

.menu-items--bg {
  background-color: $white-1;
  color: $gray-1;
}
</style>
