<template>
  <SectionContainer>
    <div class="info-data">
      <div class="info-data__image-container">
        <img class="info-image" :src="props?.infoData?.image" :alt="props?.infoData?.name" />
      </div>
      <div class="info-data__container">
        <h4 class="info-data__name">{{ props?.infoData?.name }}</h4>
        <div class="info-data__id">
          <p>Reg. ID: {{ props.infoData?.regID }}</p>
          <button
            @click="toastCopyMessage('Reg. ID Copied', props.infoData?.regID)"
            class="info-data__button-id"
          >
            <IconCopy />
          </button>
        </div>
        <p class="info-status">Status: {{ props.infoData?.status }}</p>
      </div>
    </div>
    <ul class="items-info">
      <li class="item-info">
        <IconEditText />
      </li>
      <li class="item-info">
        <IconChat />
      </li>
      <li class="item-info">
        <IconCalendar />
      </li>
      <li class="item-info">
        <IconMessage />
      </li>
      <li class="item-info">
        <IconPhoneVue />
      </li>
      <li class="item-info">
        <IconMore />
      </li>
    </ul>
  </SectionContainer>
</template>

<script setup lang="ts">
import IconCopy from '@/components/icons/homeIcons/IconCopy.vue'
import SectionContainer from './SectionContainer.vue'
import IconMore from '@/components/icons/menuIcons/IconMore.vue'

import IconCalendar from '@/components/icons/homeIcons/IconCalendar.vue'
import IconPhoneVue from '@/components/icons/homeIcons/IconPhone.vue'
import IconMessage from '@/components/icons/homeIcons/IconMessage.vue'
import IconChat from '@/components/icons/homeIcons/IconChat.vue'
import IconEditText from '@/components/icons/homeIcons/IconEditText.vue'
import { toastCopyMessage } from '@/lib/vueToastification/toastCopyMessage'
import { type IInfoData } from '../../../../interfaces/IStudentInfo'

interface Iprops {
  infoData?: IInfoData
}

const props = defineProps<Iprops>()
</script>

<style scoped lang="scss">
.info-data {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  padding-bottom: 42px;
  padding-top: 20px;
  gap: 15px;
}
.info-data__button-id {
  @include pseudoActive;
}

.info-data__image-container {
  width: 66px;
  height: 66px;
  background-color: $green-2;
  border-radius: 50%;
  overflow: hidden;
  object-position: center;
  border: solid 3px $green-2;
}
.info-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: right top;
}

.info-data__container {
  color: $gray-1;
  font-weight: 600;

  padding-top: 4px;
}

.info-data__name {
  color: $violet-1;
  padding-bottom: 10px;
  width: auto;
  display: flex;
  text-wrap: wrap;
}
.info-status {
  display: inline-block;
}

.info-data__id {
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
}

.items-info {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;
}

.item-info {
  width: 20px;
  height: 20px;
  justify-content: center;
  display: flex;
  align-items: end;
  color: $gray-1;
  @include pseudoActive;
}
/* @include mediaMin(1200px) {
  .info-data__image-container {
    width: 66px;
    height: 66px;
  }
} */
</style>
