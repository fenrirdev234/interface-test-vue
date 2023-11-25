<template>
  <template v-if="props.type === 'age'">
    <div class="card-event__icon">
      <div class="card-event-icon__container">
        <IconCalendar />
      </div>
    </div>
  </template>
  <template v-if="props.type === 'status'">
    <div class="card-event__icon">
      <div class="card-event-icon__container">
        <IconStatus />
      </div>
    </div>
  </template>

  <template v-if="props.type === 'country'">
    <div class="card-event__icon">
      <div class="card-event-icon__container">
        <IconCountry />
      </div>
    </div>
  </template>

  <template v-if="props.type === 'contact'">
    <div class="card-event__icon">
      <div class="card-event-icon__container">
        <IconContactVue />
      </div>
    </div>
  </template>

  <template v-if="props.type === 'activity'">
    <div class="card-event__icon">
      <div class="card-event-icon__container">
        <IconActivity />
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { type IEventType } from '../../../interfaces/IEvents'
import IconCalendar from '@/components/icons/homeIcons/IconCalendar.vue'

import IconStatus from '@/components/icons/homeIcons/IconStatus.vue'
import IconCountry from '@/components/icons/homeIcons/IconCountry.vue'
import IconContactVue from '@/components/icons/homeIcons/IconContact.vue'

import IconActivity from '@/components/icons/homeIcons/IconActivity.vue'

const props = defineProps<IEventType>()
</script>

<style scoped lang="scss">
.card-event__icon {
  width: 40px;
  height: 40px;
  background-color: $green-2;
  border-radius: 50%;
  color: $white-1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-event-icon__container {
  width: 20px;
}
</style>
