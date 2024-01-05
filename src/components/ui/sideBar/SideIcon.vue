<template>
  <div class="side-icon material-icons-round" :class="{ 'side-icon__active': props.active }">
    {{ StringIcon(props.icon) }}
  </div>
</template>

<script setup lang="ts">
import { type ISideIcon } from '../../../interfaces/ISideMenu'
import { StringIcon } from '../../../lib/StringIcon'

const props = defineProps<ISideIcon>()
</script>

<style scoped lang="scss">
.side-icon {
  color: $gray-1;
  display: flex;
  align-items: end;
  font-size: 24px;
  font-weight: 400;
  line-height: 21px;
  width: 24px;
  height: 21px;
}
.side-icon__active {
  color: $white-1;
}
</style>
