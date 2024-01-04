<template>
  <li class="accordion">
    <button
      class="accordion__button"
      :class="{
        'accordion__button--active': isOpen && collapsed.isColapsed
      }"
      @click="isOpen = !isOpen"
    >
      <div class="accordion__title-container">
        <div>
          <SideIcon :icon="props.icon" :active="isOpen && collapsed.isColapsed" />
        </div>
        <transition name="fade">
          <span
            v-if="collapsed.isColapsed"
            class="accordion__title"
            :class="{
              'accordion__button--weight': props.weigth
            }"
          >
            <span>{{ props.name }}</span>
            <div
              class="accordion__arrow material-icons-round"
              :class="{
                'accordion__arrow--up': isOpen && collapsed.isColapsed,
                'accordion__arrow--down': !isOpen
              }"
            >
              expand_more
            </div>
          </span>
        </transition>
      </div>
    </button>
    <Transition name="accordion-content-a">
      <ul v-if="collapsed.isColapsed && isOpen" class="accordion__content">
        <li v-for="(item, id) in props.items" :key="id" class="accordion__item">
          <div class="accordion-item__icon material-icons-round">circle</div>
          {{ item }}
        </li>
      </ul>
    </Transition>
  </li>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
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
  padding: 0px 10px;
  height: 42px;
  border-radius: 5px;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05));
}
.accordion__button--active {
  background-color: $violet-1;
  color: $white-1;
}
.accordion__button--weight {
  font-weight: 700;
}
.accordion__content {
  padding-top: 10px;
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.accordion__item {
  padding-left: 30px;

  height: 42px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: $gray-1;
  font-weight: 500;
  line-height: 24px;
  font-size: 15px;
}

.accordion-item__icon {
  color: $gray-1;
  font-size: 10px;

  font-weight: 400;
  line-height: 21px;
}
.accordion__title {
  font-size: 15px;
  white-space: nowrap;
  justify-content: space-between;
  width: 100%;
  display: flex;
}

.accordion__title-container {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
}

.accordion__arrow {
  font-size: 24px;

  font-weight: 400;
  line-height: 21px;
}
.accordion__arrow--up {
  transition: all 0.6s ease;
  transform: rotateZ(180deg);
}
.accordion__arrow--down {
  transition: all 0.6s ease;
  transform: rotateZ(0deg);
}

.accordion-content-a-enter-active,
.accordion-content-a-leave-active {
  transition: all 0.2s;
}
.accordion-content-a-enter,
.accordion-content-a-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
