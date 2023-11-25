<template>
  <SectionContainer>
    <AccordionVue title="Sobre el Estudiante">
      <div class="student-container">
        <ul class="student-info">
          <li>Período: {{ props.studentData?.info.period }}</li>
          <li>Status: {{ props.studentData?.info.status }}</li>
          <li>Colegio: {{ props.studentData?.info.college }}</li>
          <li>Mod. Admisión: {{ props.studentData?.info.admission }}</li>
          <li>Segmento: {{ props.studentData?.info.segment }}</li>
          <li>Segmento Detalle: {{ props.studentData?.info.segmentDetail }}</li>
        </ul>
        <div>
          <h4 class="risk-title">Detalle Riesgo de Ingreso:</h4>
          <DividerVue />
          <div class="risk-grid">
            <template v-for="(item, index) in props.studentData?.risk" :key="index">
              <div class="item-subject" :class="{ item__space: index > 0 }">
                <p class="item-subject__title">{{ item.subject }}:</p>
              </div>
              <div class="item-risk" :class="{ item__space: index > 0 }">
                <p>{{ item.riskLevel }}</p>
                <p>
                  (Nota: {{ item.score }}
                  )
                </p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </AccordionVue>
  </SectionContainer>
</template>

<script setup lang="ts">
import AccordionVue from '@/components/ui/Accordion/AccordionVue.vue'
import SectionContainer from './SectionContainer.vue'
import DividerVue from '@/components/ui/divider/DividerVue.vue'

import { type IStudentData } from '../../../../interfaces/IStudentInfo'

interface Iprops {
  studentData?: IStudentData
}
const props = defineProps<Iprops>()
</script>

<style scoped>
.student-container {
  width: 100%;
}

.student-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 12px;
  font-weight: 600;
  padding-bottom: 36px;
}
.risk-title {
  font-weight: 600;
  font-size: 14px;
  padding-bottom: 9px;
}
.risk-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'subject risk';
  padding-top: 12px;
}

.item-subject {
  grid-area: 'subject';
  display: flex;
  flex-direction: column;

  font-size: 12px;
  font-weight: 600;
}
.item__space {
  padding-top: 15px;
}
.item-subject__title {
  display: flex;
}

.item-risk {
  width: 100%;
  grid-area: 'risk';
  font-size: 12px;
  font-weight: 600;
  padding-left: 12px;
}
</style>
