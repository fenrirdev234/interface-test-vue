<template>
  <div class="dropdown">
    <button ref="ignoreTarget" class="dropdown__button" @click="onClickOpen">
      <span class="dropdown__title">{{ title }} </span>
      <div :class="{ 'dropdown__arrow--up': isOpen, 'dropdown__arrow--down': !isOpen }">
        <IconArrowSolid />
      </div>
    </button>
    <Transition name="dropdown-content-a">
      <div v-if="isOpen" ref="target" class="dropdown__content">
        <button
          class="dropdown__item"
          v-for="item in props.data"
          @click="selectItem(item.id, item.name)"
          v-bind:key="item.id"
          :class="{ 'dropdown__item--selected': item.id === seleted }"
        >
          {{ item.name }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import IconArrowSolid from '@/components/icons/homeIcons/IconArrowSolid.vue'
import { type IDropdownProps } from '../../../interfaces/IDropdown'

const props = withDefaults(defineProps<IDropdownProps>(), {
  initialValue: () => ({ name: '', id: '' }),
  data: () => [{ name: '', id: '' }]
})

const emit = defineEmits<{ changeSelected: [value: string] }>()

const seleted: Ref<string | undefined> = ref(props.initialValue.id)
const title: Ref<string | undefined> = ref(props.initialValue.name)
const isOpen: Ref<boolean> = ref(false)
const target = ref(null)
const ignoreTarget = ref(null)

const selectItem = (id: string | undefined, name: string | undefined): void => {
  if (id && id !== seleted.value) {
    seleted.value = id
    title.value = name
    emit('changeSelected', id)
  }
  onClickOpen()
}
const onClickOpen = () => {
  isOpen.value = !isOpen.value
}

onClickOutside(
  target,
  () => {
    isOpen.value = false
  },
  {
    ignore: [ignoreTarget]
  }
)
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;
}
.dropdown__button {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
  border-radius: 5px;
  color: $gray-1;
  border-color: $gray-6;
  padding: 7px 15px;
  font-size: 12px;
  font-weight: 700;
}
.dropdown__content {
  padding: 6px 0px;

  border: 2px solid;
  border-radius: 5px;
  color: $gray-1;
  border-color: $gray-6;
  position: absolute;
  width: 100%;
  background-color: $white-1;
  top: 40px;
}
.dropdown__item {
  padding: 4px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 12px;
  &:hover {
    background-color: $gray-6;
  }
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
