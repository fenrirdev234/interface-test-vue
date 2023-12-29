<template>
  <SectionContainer>
    <AccordionVue title="Career Details">
      <div class="career-container">
        <ul class="career-items">
          <li class="career-item">
            <p>Career Name:</p>
            <DropdownVue
              :initial-value="{
                name: props.carrerData?.career[0].name,
                id: props.carrerData?.career[0].id
              }"
              v-if="props.carrerData?.career"
              :data="optionCareer(props.carrerData?.career)"
              @change-selected="(select) => changeCareer(props.carrerData?.career, select)"
            />
          </li>
          <ItemSection2 title="Career ID" :content="career?.id" />
          <ItemSection2 title="Type" :content="career?.type" />
          <ItemSection2 title="Modality" :content="career?.modality" />
          <ItemSection2 title="Status" :content="career?.status" />
          <ItemSection2 title="Student ID" :content="career?.studentId" />
          <ItemSection2 title="Cohort" :content="career?.cohort" />
        </ul>
      </div>
    </AccordionVue>
  </SectionContainer>
</template>

<script setup lang="ts">
import DropdownVue from '@/components/ui/Dropdown/DropdownVue.vue'
import ItemSection2 from './ItemSection2.vue'
import SectionContainer from './SectionContainer.vue'
import AccordionVue from '@/components/ui/Accordion/AccordionVue.vue'
import { ref, type Ref } from 'vue'
import type { ICarrerData } from '@/interfaces/IStudentInfo'
interface ICareer {
  name: string
  id: string
  type: string
  modality: string
  status: string
  studentId: string
  cohort: string
}
interface ICareerOption {
  name: string
  id: string
}

interface Iprops {
  carrerData?: ICarrerData
}

const props = defineProps<Iprops>()

const career: Ref<ICareer | undefined> = ref(props.carrerData?.career[0])

const optionCareer = (data: ICareer[] | undefined): ICareerOption[] | undefined => {
  const optionMap = data?.map((item) => ({
    name: item.name,
    id: item.id
  }))
  return optionMap
}

const changeCareer = (carrers: ICareer[] | undefined, selected: string | undefined) => {
  if (carrers) {
    const filtersResult = carrers?.filter((careerfitler) => careerfitler.id === selected)

    career.value = filtersResult[0]
  }
}
</script>

<style scoped>
.career-container {
  width: 100%;
}

.career-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.career-item {
  width: 100%;
}
.career-item p {
  font-size: 12px;
  padding-bottom: 5px;
}
</style>
