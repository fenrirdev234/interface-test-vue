<template>
  <nav class="menu-container">
    <ul class="menu-list">
      <li class="menu-items menu-items--active"><IconHome /></li>
      <li class="menu-items menu-items--bg-none">
        <IconMoreVue />
      </li>
      <li class="menu-items menu-items--bg">
        <IconPlus />
      </li>
      <li class="menu-items menu-items--bg">
        <IconUpdate />
      </li>
      <li class="menu-items menu-items--bg">
        <IconGrowVue />
      </li>
      <li class="menu-items menu-items--bg">
        <IconEducVue />
      </li>
      <li class="menu-items menu-items--bg">
        <IconStatistics />
      </li>
      <li class="menu-items menu-items--bg">
        <IconStatisticsMoreVue />
      </li>
      <li class="menu-items menu-items--bg">
        <IconProcessVue />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import IconEducVue from '../icons/menuIcons/IconEduc.vue'
import IconGrowVue from '../icons/menuIcons/IconGrow.vue'
import IconHome from '../icons/menuIcons/IconHome.vue'
import IconMoreVue from '../icons/menuIcons/IconMore.vue'
import IconPlus from '../icons/menuIcons/IconPlus.vue'
import IconProcessVue from '../icons/menuIcons/IconProcess.vue'
import IconStatistics from '../icons/menuIcons/IconStatistics.vue'
import IconStatisticsMoreVue from '../icons/menuIcons/IconStatisticsMore.vue'
import IconUpdate from '../icons/menuIcons/IconUpdate.vue'
</script>

<style scoped lang="scss">
.menu-container {
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
