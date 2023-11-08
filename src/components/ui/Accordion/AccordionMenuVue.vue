<template>
  <div class="accordion">
    <button
      class="accordion__button"
      :class="{
        'accordion__button--active': isOpen,
        'accordion__button--weight': props.weigth
      }"
      @click="isOpen = !isOpen"
    >
      <div class="accordion__title-container">
        <div>
          <SideIcon :icon="props.icon" :active="isOpen" />
        </div>
        <transition name="fade">
          <span v-if="collapsed.isColapsed" class="accordion__title">
            <span>{{ props.name }}</span>
            <div
              class="accordion__arrow"
              :class="{ 'accordion__arrow--up': isOpen, 'accordion__arrow--down': !isOpen }"
            >
              <IconArrowDirection />
            </div>
          </span>
        </transition>
      </div>
    </button>
    <Transition name="accordion-content-a">
      <ul v-if="collapsed.isColapsed && isOpen" class="accordion__content">
        <li v-for="(item, id) in props.items" :key="id" class="accordion__item">
          <div class="accordion-item__icon"></div>
          {{ item }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import IconArrowDirection from '@/components/icons/homeIcons/IconArrowDirection.vue'
import SideIcon from '@/components/ui/sideBar/SideIcon.vue'

import { type ISideAccordion } from '../../../interfaces/ISideMenu'
import { useCollapsedStore } from '../../../stores/isCollapsed'
const collapsed = useCollapsedStore()

const props = defineProps<ISideAccordion>()

const isOpen: Ref<boolean> = ref(props.active)
</script>

<style scoped lang="scss">
.accordion {
  width: 100%;
}

.accordion__button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: $gray-1;
  background-color: $white-1;
  padding: 12px;
  border-radius: 4px;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05));
}
.accordion__button--active {
  background-color: $violet-1;
  color: $white-1;
}
.accordion__button--weight {
  font-weight: 600;
}
.accordion__content {
  padding-top: 6px;
  padding-bottom: 4px;

  width: 100%;
}
.accordion__item {
  padding-left: 30px;
  padding-top: 18px;
  padding-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: $gray-1;
}

.accordion-item__icon {
  width: 8px;
  height: 8px;
  background-color: $gray-1;
  border-radius: 50%;
}
.accordion__title {
  font-size: 14px;
  white-space: nowrap;
  justify-content: space-between;
  width: 100%;
  display: flex;
}
.accordion__title span {
  padding-right: 12px;
}
.accordion__title-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.accordion__arrow {
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.accordion__arrow--up {
  transition: all 0.4s ease;
  transform: rotateZ(180deg);
}
.accordion__arrow--down {
  transition: all 0.4s ease;
  transform: rotateZ(0deg);
}

.accordion-content-a-enter-active,
.accordion-content-a-leave-active {
  transition: all 0.4s;
}
.accordion-content-a-enter,
.accordion-content-a-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
