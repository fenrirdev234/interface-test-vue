<template>
  <div>
    <button class="accordion__button" @click="isOpen = !isOpen">
      <div class="accordion__title-container">
        <span class="material-icons-round accordion__icon--size"> drag_indicator </span>
        <span class="accordion__title">{{ props.title }}</span>
      </div>
      <div
        :class="{ 'accordion__arrow--up': isOpen, 'accordion__arrow--down': !isOpen }"
        class="material-icons-round arrow-icon--size"
      >
        expand_more
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
  color: $gray-1;
}
.accordion__content {
  padding-top: 15px;

  color: $gray-1;
  width: 100%;
}
.accordion__item {
  width: 100%;
  display: flex;
}
.accordion__icon--size {
  font-size: 16px;
  font-weight: 400;
}

.accordion__title {
  font-size: 14px;
  font-weight: 700;
}

.accordion__title-container {
  display: flex;
  align-items: center;
}
.arrow-icon--size {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.3px;
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
