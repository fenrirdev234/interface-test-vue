<template>
  <li class="side-item" :class="{ 'side-item--collased': !collapsed.isColapsed }">
    <transition name="fade">
      <div class="side-icon material-icons-round" v-if="!collapsed.isColapsed">...</div>
    </transition>

    <transition name="fade">
      <div v-if="collapsed.isColapsed" class="side-item__text">REPORTS</div>
    </transition>
  </li>
</template>

<script setup lang="ts">
import { useCollapsedStore } from '../../../stores/isCollapsed'

const collapsed = useCollapsedStore()
</script>

<style scoped lang="scss">
.side-item {
  padding-top: 10px;

  padding-right: 10px;
  width: 100%;
  display: flex;
  gap: 12px;

  border-radius: 4px;
}
.side-item--collased {
  justify-content: center;
  padding-left: 10px;
}
.side-item--no-collased {
  justify-content: s;
}
.side-item__text {
  color: $gray-9;
  font-size: 12px;
  white-space: nowrap;
  display: flex;
  font-weight: 700;
  line-height: 18px;
}
.side-icon {
  font-size: 24px;
  font-weight: 400;
  line-height: 21px;
  color: $gray-1;
  display: flex;
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
