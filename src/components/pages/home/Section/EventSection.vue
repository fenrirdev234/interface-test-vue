<template>
  <article class="event-container">
    <div ref="container" class="slider-container keen-slider">
      <CardEvent
        v-for="(item, index) in props.eventData"
        :key="index"
        :type="item.type"
        :title="item.title"
        :detail="item.detail"
        :moreDetail="item.moreDetail"
      />
    </div>
    <!-- <CardEvent
      v-for="(item, index) in props.eventData"
      :key="index"
      :type="item.type"
      :title="item.title"
      :detail="item.detail"
      :moreDetail="item.moreDetail"
    /> -->
  </article>
</template>

<script setup lang="ts">
import CardEvent from '@/components/ui/card/CardEvent.vue'
import { type IEvent } from '../../../../interfaces/IEvents'

import { useKeenSlider } from 'keen-slider/vue'

const [container] = useKeenSlider({
  loop: false,
  mode: 'snap',
  rtl: false,
  slides: { perView: 'auto', spacing: 20 }
})

interface IProps {
  eventData: IEvent[]
}
const props = defineProps<IProps>()
</script>

<style scoped lang="scss">
.event-container {
  padding-top: 20px;
  padding-bottom: 30px;
  height: 150px;

  max-width: 100;
  overflow: hidden;
  position: relative;
}
.slider-container {
  position: absolute;
}
@include mediaMin(1120px) {
  .event-container {
    height: 110;
  }
}
.slider-item {
  width: auto;
  min-width: 150px;
}
</style>
