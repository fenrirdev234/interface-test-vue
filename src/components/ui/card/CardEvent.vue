<template>
  <div class="card-event">
    <div class="card-event__principal-container">
      <CardEventIconVue :type="props.type" />
      <div>
        <p class="card-event__type">
          <span>
            {{ typeTitle[props.type] }}
          </span>
          <span class="icon-gear material-icons-round" v-if="props.type === 'status'"
            >settings
          </span>
        </p>
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
  padding: 15px;
  background-color: $white-1;
  border-radius: 6px;
  @include shadowMix;
  max-width: 207px;
  width: 100%;
}

.card-event__title {
  font-size: 18px;
  color: $gray-1;
  text-align: end;
}
.icon-gear {
  font-size: 16px;

  font-weight: 400;
}
.card-event__type {
  color: $gray-1;
  justify-content: end;
  align-items: center;
  text-align: end;
  display: flex;
  font-size: 14px;
  gap: 5px;
}

.card-event__detail {
  font-size: 14px;
  color: $gray-1;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}
.card-event__principal-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}
</style>
