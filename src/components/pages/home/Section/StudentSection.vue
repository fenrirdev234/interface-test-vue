<template>
  <SectionContainer>
    <AccordionVue title="Sobre el Estudiante">
      <div class="student-container">
        <ul class="student-info">
          <li class="student-info__item">
            Período:<span class="student-info__item-span">
              {{ props.studentData?.info.period }}
            </span>
          </li>
          <li>
            Status:
            <span class="student-info__item-span">
              {{ props.studentData?.info.status }}
            </span>
          </li>
          <li>
            Colegio:
            <span class="student-info__item-span">
              {{ props.studentData?.info.college }}
            </span>
          </li>
          <li>
            Mod. Admisión:
            <span class="student-info__item-span">
              {{ props.studentData?.info.admission }}
            </span>
          </li>
          <li>
            Segmento:
            <span class="student-info__item-span">
              {{ props.studentData?.info.segment }}
            </span>
          </li>
          <li>
            Segmento Detalle:
            <span class="student-info__item-span">
              {{ props.studentData?.info.segmentDetail }}
            </span>
          </li>
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
  gap: 10px;
  font-size: 12px;
  padding-bottom: 30px;
}
.student-info__item {
  display: flex;
  gap: 5px;
  align-items: center;
}
.student-info__item-span {
  line-height: 17px;
}
.risk-title {
  font-size: 14px;
  padding-bottom: 10px;
}

.risk-grid {
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'subject risk';
  padding-top: 10px;
  column-gap: 5px;
}

.item-subject {
  grid-area: 'subject';
  display: flex;
  flex-direction: column;

  font-size: 12px;
}
.item__space {
  padding-top: 10px;
}
.item-subject__title {
  display: flex;
}

.item-risk {
  width: 100%;
  grid-area: 'risk';
  font-size: 12px;
  line-height: 17px;
}
</style>
