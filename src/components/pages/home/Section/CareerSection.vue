<template>
  <SectionContainer>
    <AccordionVue title="Career Details">
      <div class="career-container">
        <ul class="career-items">
          <li class="career-item">
            <DropdownVue
              :initial-value="{ name: data.career[0].name, id: data.career[0].id }"
              :data="optionCareer(data.career)"
              @change-selected="(select) => changeCareer(data.career, select)"
            />
          </li>
          <ItemSection title="Career ID" :content="career.id" />
          <ItemSection title="Type" :content="career.type" />
          <ItemSection title="Modality" :content="career.modality" />
          <ItemSection title="Status" :content="career.status" />
          <ItemSection title="Student ID" :content="career.studentId" />
          <ItemSection title="Cohort" :content="career.cohort" />
        </ul>
      </div>
    </AccordionVue>
  </SectionContainer>
</template>

<script setup lang="ts">
import DropdownVue from '@/components/ui/Dropdown/DropdownVue.vue'
import ItemSection from './ItemSection.vue'
import SectionContainer from './SectionContainer.vue'
import AccordionVue from '@/components/ui/Accordion/AccordionVue.vue'
import { ref, type Ref } from 'vue'
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

const data = {
  career: [
    {
      name: 'Software  Engineering',
      id: '0398P',
      type: 'Graduate',
      modality: 'On-Campus',
      status: 'Enrollment',
      studentId: 'AYSI0123839',
      cohort: 'A1 2023'
    },
    {
      name: 'industrial Engineering',
      id: '1111',
      type: 'Graduate',
      modality: 'On-Campus',
      status: 'Enrollment',
      studentId: 'AYSI0123839',
      cohort: 'A1 2023'
    }
  ]
}

const career: Ref<ICareer> = ref(data.career[0])

const optionCareer = (data: ICareer[]): ICareerOption[] => {
  const optionMap = data.map((item) => ({
    name: item.name,
    id: item.id
  }))
  return optionMap
}

const changeCareer = (carrers: ICareer[], selected: string) => {
  const filtersResult = carrers.filter((careerfitler) => careerfitler.id === selected)
  career.value = filtersResult[0]
}
</script>

<style scoped>
.career-container {
  width: 100%;
}

.career-items {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.career-item {
  width: 100%;
}
</style>
