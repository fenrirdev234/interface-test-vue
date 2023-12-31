<template>
  <SectionContainer>
    <AccordionVue title="About">
      <div class="about-container">
        <ul class="about-items about-items--primary">
          <ItemSection title="First Name" :content="props.aboutData?.firstName" />
          <ItemSection title="Last Name" :content="props.aboutData?.lastName" />
          <li class="about-item">
            <div class="about-item__email">
              <p>Email:</p>
              <button
                class="material-icons-round about-item__icon--size"
                @click="toastCopyMessage('email Copied', props.aboutData?.email)"
              >
                edit
              </button>
            </div>
            <p>{{ props.aboutData?.email }}</p>
          </li>
        </ul>
        <Divider />
        <ul class="about-items about-items--secundary">
          <ItemSection title="Phone Number" :content="props.aboutData?.phone" />
          <ItemSection title="Country" :content="props.aboutData?.country" />
          <ItemSection title="Category" :content="props.aboutData?.category" />
        </ul>
      </div>
    </AccordionVue>
  </SectionContainer>
</template>

<script setup lang="ts">
import SectionContainer from './SectionContainer.vue'
import AccordionVue from '@/components/ui/Accordion/AccordionVue.vue'
import Divider from '@/components/ui/divider/DividerVue.vue'
import ItemSection from './ItemSection.vue'
import { toastCopyMessage } from '@/lib/vueToastification/toastCopyMessage'
import type { IAboutData } from '@/interfaces/IStudentInfo'

interface IProps {
  aboutData?: IAboutData
}

const props = defineProps<IProps>()
</script>

<style scoped lang="scss">
.about-container {
  width: 100%;
}
.about-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.about-items--primary {
  padding-bottom: 5px;
}
.about-items--secundary {
  padding-top: 10px;
}
.about-item {
  font-size: 12px;
  color: $gray-1;
}
.about-item p {
  line-height: 17px;
}
.about-item__title {
  padding-bottom: 6px;
}
.about-item__email {
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.about-item__icon--size {
  @include pseudoActive;
  font-size: 12px;

  font-weight: 400;
}
</style>
