<template>
  <SectionContainer>
    <div class="info-data">
      <div class="info-data__image-container"></div>
      <div class="info-data__container">
        <h4 class="info-data__name">{{ data.name }}</h4>
        <div class="info-data__id">
          <p>Reg. ID: {{ data.regID }}</p>
          <div>
            <IconCopy />
          </div>
        </div>
        <p>Status: {{ data.status }}</p>
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

const data = {
  name: 'Danielle Munchen Schollengberg',
  regID: 'AYSI32392',
  status: 'Active'
}
</script>

<style scoped lang="scss">
.info-data {
  display: flex;
  padding-bottom: 42px;
  padding-top: 20px;
  gap: 15px;
}
.info-data__image-container {
  width: 66px;
  height: 66px;
  background-color: $green-2;
  border-radius: 50%;
}
.info-data__container {
  color: $gray-1;
  font-weight: 600;
  text-wrap: wrap;
  padding-top: 4px;
}

.info-data__name {
  color: $violet-1;
  padding-bottom: 10px;
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
}
</style>
