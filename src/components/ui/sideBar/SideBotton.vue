<template>
  <li
    class="side-item"
    :class="{ 'side-item--active': props.active }"
    @click="collapsed.toggleOpenSidebar()"
  >
    <SideIcon :icon="props.icon" :active="props.active" />
    <transition name="fade">
      <span
        v-if="collapsed.isColapsed"
        class="side-item__text"
        :class="{
          'side-item__text--active': props.active,
          'side-item__text--weight': props.weigth
        }"
      >
        {{ props.name }}
      </span>
    </transition>
  </li>
</template>

<script setup lang="ts">
import SideIcon from './SideIcon.vue'
import { type ISideButton } from '../../../interfaces/ISideMenu'
import { useCollapsedStore } from '../../../stores/isCollapsed'

const props = defineProps<ISideButton>()
const collapsed = useCollapsedStore()
</script>

<style scoped lang="scss">
.side-item {
  padding: 0px 10px;
  width: 100%;
  background-color: $white-1;
  display: flex;
  gap: 9px;
  height: 42px;
  align-items: center;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05));
}
.side-item__text {
  color: $gray-1;
  width: 177px;
  font-size: 15px;
  white-space: nowrap;
  line-height: 24px;
  text-align: start;
}

.side-item__text--weight {
  font-weight: 700;
}
.side-item__text--active {
  color: $white-1;
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
