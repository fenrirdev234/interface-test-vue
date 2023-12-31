<template>
  <li class="side-item">
    <transition name="fade">
      <div class="side-icon" v-if="!collapsed.isColapsed">
        <IconMoreVue />
      </div>
    </transition>

    <transition name="fade">
      <div v-if="collapsed.isColapsed" class="side-item__text">REPORTS</div>
    </transition>
  </li>
</template>

<script setup lang="ts">
import { useCollapsedStore } from '../../../stores/isCollapsed'
import IconMoreVue from '@/components/icons/menuIcons/IconMore.vue'

const collapsed = useCollapsedStore()
</script>

<style scoped lang="scss">
.side-item {
  padding: 12px;
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  border-radius: 4px;
  align-items: end;
}
.side-item__text {
  color: $gray-9;
  font-size: 12px;
  white-space: nowrap;
  height: 22px;
  display: flex;
  align-items: end;
  font-weight: 700;
  line-height: 18px;
}
.side-icon {
  width: 22px;
  height: 22px;

  color: $gray-1;
  display: flex;
  align-items: end;
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
