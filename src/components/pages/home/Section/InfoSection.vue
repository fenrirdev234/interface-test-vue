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
            class="info-data__button-id material-icons-round"
          >
            content_copy
          </button>
        </div>
        <p class="info-status">Status: {{ props.infoData?.status }}</p>
      </div>
    </div>
    <ul class="items-info">
      <li class="item-info material-icons-round">edit_note</li>
      <li class="item-info material-icons-round">chat</li>
      <li class="item-info material-icons-round">today</li>
      <li class="item-info material-icons-round">email</li>
      <li class="item-info material-icons-round">phone</li>
      <li class="item-info material-icons-round">more_horiz</li>
    </ul>
  </SectionContainer>
</template>

<script setup lang="ts">
import IconContentCopy from '@material-design-icons/svg/filled/content_copy.svg?component'
import SectionContainer from './SectionContainer.vue'
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
  padding: 20px 0px;
  margin-bottom: 10px;
  gap: 15px;
}
.info-data__button-id {
  @include pseudoActive;
  font-size: 18px;
  font-style: normal;
  line-height: 21px;
}

.info-data__image-container {
  width: 65px;
  height: 65px;
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
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.info-data__container {
  color: $gray-1;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.info-data__name {
  color: $violet-1;

  width: auto;
  display: flex;
  text-wrap: wrap;
  font-size: 18px;
}
.info-status {
  display: inline-block;
}

.info-data__id {
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  font-size: 16px;
}

.items-info {
  display: flex;
  justify-content: space-between;
}

.item-info {
  padding: 10px;
  justify-content: center;
  display: flex;
  align-items: end;
  color: $gray-1;
  @include pseudoActive;
  font-weight: 400;
  line-height: 21px;
  font-size: 24px;
}
</style>
