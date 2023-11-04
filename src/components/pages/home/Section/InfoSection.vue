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
    <div>dfgdg</div>
  </SectionContainer>
</template>

<script setup lang="ts">
import IconCopy from '@/components/icons/homeIcons/IconCopy.vue'
import SectionContainer from './SectionContainer.vue'

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
</style>
