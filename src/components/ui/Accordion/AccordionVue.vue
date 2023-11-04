<template>
  <div>
    <button class="accordion__button" @click="isOpen = !isOpen">
      <div class="accordion__title-container">
        <div>
          <IconPointVue />
        </div>
        <span class="accordion__title">{{ props.title }}</span>
      </div>
      <div :class="{ 'accordion__arrow--up': isOpen, 'accordion__arrow--down': !isOpen }">
        <IconArrowDirection />
      </div>
    </button>
    <Transition name="accordion-content-a">
      <div v-if="isOpen" class="accordion__content">
        <article class="accordion__item">
          <slot />
        </article>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import IconArrowDirection from '@/components/icons/homeIcons/IconArrowDirection.vue'
import IconPointVue from '@/components/icons/homeIcons/IconPoint.vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

const isOpen: Ref<boolean> = ref(true)
</script>

<style scoped lang="scss">
.accordion__button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  color: $gray-1;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 4px;
  padding-bottom: 4px;
}
.accordion__content {
  padding-top: 15px;
  padding-bottom: 6px;
  color: $gray-1;
  width: 100%;
}
.accordion__item {
  width: 100%;
  display: flex;
}
.accordion__title {
  padding-left: 5px;
  font-size: 12px;
}
.accordion__title-container {
  display: flex;
  align-items: center;
}

.accordion__arrow--up {
  transition: all 0.4s ease;
  transform: rotateZ(180deg);
}
.accordion__arrow--down {
  transition: all 0.4s ease;
  transform: rotateZ(0deg);
}
.accordion__item--selected {
  background-color: $gray-6;
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
</style>
