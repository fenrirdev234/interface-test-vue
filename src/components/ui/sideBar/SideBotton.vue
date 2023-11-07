<template>
  <div class="side-item" :class="{ 'side-item--active': props.active }">
    <SideIcon :icon="props.icon" :active="props.active" />
    <!-- <transition name="fade">
      <span v-if="!collapsed"> </span>
      <span>
        {{ props.name }}
      </span>
    </transition> -->
  </div>
</template>

<script setup lang="ts">
import SideIcon from './SideIcon.vue'
import { type ISideButton } from '../../../interfaces/ISideMenu'
const props = defineProps<ISideButton>()
</script>

<style scoped lang="scss">
.side-item {
  padding: 12px;
  background-color: $white-1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05));
}

.side-item--active {
  background-color: $violet-1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
