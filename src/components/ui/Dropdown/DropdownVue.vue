<template>
  <div class="dropdown">
    <button class="dropdown__button" @click="isOpen = !isOpen">
      <span class="dropdown__title">{{ seleted }}</span>
      <div :class="{ 'dropdown__arrow--up': isOpen, 'dropdown__arrow--down': !isOpen }">
        <IconArrowSolid />
      </div>
    </button>
    <Transition name="dropdown-content-a">
      <div v-if="isOpen" class="dropdown__content">
        <button
          class="dropdown__item"
          @click="selectItem(item)"
          v-for="item in props.data"
          v-bind:key="item"
          :class="{ 'dropdown__item--selected': item === seleted }"
        >
          {{ item }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import IconArrowSolid from '@/components/icons/homeIcons/IconArrowSolid.vue'

const props = defineProps({
  data: {
    type: Array<string>
  },
  title: {
    type: String,
    default: ''
  }
})

const emit = defineEmits<{ changeSelected: [value: string] }>()

const seleted: Ref<string> = ref(props?.title)

const isOpen: Ref<boolean> = ref(false)

const selectItem = (value: string) => {
  if (value === seleted.value) {
    seleted.value = props.title
    emit('changeSelected', '')
  } else {
    seleted.value = value
    emit('changeSelected', value)
  }
}
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;
}
.dropdown__button {
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  border: 2px solid;
  border-radius: 5px;
  color: $gray-1;
  border-color: $gray-6;

  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 14px;
  padding-right: 20px;
}
.dropdown__content {
  padding-top: 6px;
  padding-bottom: 6px;
  border: 2px solid;
  border-radius: 5px;
  color: $gray-1;
  border-color: $gray-6;
  position: absolute;
  width: 100%;
  background-color: $white-1;
  top: 55px;
}
.dropdown__item {
  padding-top: 4px;
  padding-bottom: 4px;
  width: 100%;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: $gray-6;
  }
}
.dropdown__title {
  padding-right: 16px;
}
.dropdown__arrow--up {
  transition: all 0.4s ease;
  transform: rotateZ(180deg);
}
.dropdown__arrow--down {
  transition: all 0.4s ease;
  transform: rotateZ(0deg);
}
.dropdown__item--selected {
  background-color: $gray-6;
}
.dropdown-content-a-enter-active,
.dropdown-content-a-leave-active {
  transition: all 0.2s;
}
.dropdown-content-a-enter,
.dropdown-content-a-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
