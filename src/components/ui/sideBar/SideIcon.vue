<template>
  <div class="side-icon" :class="{ 'side-icon__active': props.active }">
    <template v-if="icon === 'dashboard'">
      <IconHome />
    </template>
    <template v-if="icon === 'smart-enroller'">
      <IconPlus />
    </template>
    <template v-if="icon === 'retention-partner'">
      <IconUpdate />
    </template>
    <template v-if="icon === 'dropout-shield'">
      <IconArrow />
    </template>
    <template v-if="icon === 'risk-detector'">
      <IconGrowVue />
    </template>
    <template v-if="icon === 'academy-offer'">
      <IconEducVue />
    </template>
    <template v-if="icon === 'my-report'">
      <IconStatistics />
    </template>

    <template v-if="icon === 'workflows'">
      <IconProcessVue />
    </template>
    <template v-if="icon === 'more'">
      <IconMoreVue />
    </template>
    <template v-if="icon === 'custom-report'">
      <IconStatisticsMoreVue />
    </template>
  </div>
</template>

<script setup lang="ts">
import IconEducVue from '@/components/icons/menuIcons/IconEduc.vue'
import IconGrowVue from '@/components/icons/menuIcons/IconGrow.vue'
import IconHome from '@/components/icons/menuIcons/IconHome.vue'
import IconMoreVue from '@/components/icons/menuIcons/IconMore.vue'
import IconPlus from '@/components/icons/menuIcons/IconPlus.vue'
import IconProcessVue from '@/components/icons/menuIcons/IconProcess.vue'
import IconStatistics from '@/components/icons/menuIcons/IconStatistics.vue'
import IconStatisticsMoreVue from '@/components/icons/menuIcons/IconStatisticsMore.vue'
import IconUpdate from '@/components/icons/menuIcons/IconUpdate.vue'
import { type ISideIcon } from '../../../interfaces/ISideMenu'
import IconArrow from '@/components/icons/menuIcons/IconArrow.vue'

const props = defineProps<ISideIcon>()
</script>

<style scoped lang="scss">
.side-icon {
  width: 22px;
  height: 22px;
  color: $gray-1;
  display: flex;
  align-items: end;
}
.side-icon__active {
  color: $white-1;
}
</style>
