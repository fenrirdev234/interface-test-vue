<template>
  <div class="card-event">
    <div class="card-event__principal-container">
      <CardEventIconVue :type="props.type" />
      <div>
        <div class="card-event__type">
          <p>
            {{ typeTitle[props.type] }}
          </p>
          <div v-if="props.type === 'status'"><IconGear /></div>
        </div>
        <p class="card-event__title">
          {{ props.title }}
        </p>
      </div>
    </div>
    <Divider />
    <div class="card-event__detail">
      <p>{{ props.detail }}</p>
      <p>
        {{ props.moreDetail }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Divider from '@/components/ui/divider/DividerVue.vue'
import { type IEventCard } from '../../../interfaces/ICard'
import CardEventIconVue from './CardEventIcon.vue'
import IconGear from '@/components/icons/homeIcons/IconGear.vue'

const props = defineProps<IEventCard>()
const typeTitle = {
  age: 'Record Age',
  status: 'Status',
  country: 'Country',
  contact: 'Last Contact',
  activity: 'Last Activity'
}
</script>

<style scoped lang="scss">
.card-event {
  width: 150px;
  margin-right: 20px;
  background-color: $white-1;
  padding: 10px;
  border-radius: 6px;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.05));
}

.card-event__title {
  font-weight: 600;
  font-size: 16px;
  color: $gray-1;
}
.card-event__type {
  height: 14px;
  font-weight: 600;

  color: $gray-1;
  justify-content: end;
  align-items: center;
  display: flex;
  font-size: 10px;
  gap: 6px;
}
.card-event__type p {
  display: flex;
  height: auto;
  font-size: 10px;
  height: 10px;
}

.card-event__detail {
  font-size: 12px;
  color: $gray-1;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
}
.card-event__principal-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 9px;
}
/* @include mediaMin(720px) {
  .card-event {
    width: px;
    padding: 15px;
  }
} */

@include mediaMin(1120px) {
  .card-event {
    width: 207px;
    padding: 15px;
  }
}
</style>
