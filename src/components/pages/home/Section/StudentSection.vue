<template>
  <SectionContainer>
    <AccordionVue title="Sobre el Estudiante">
      <div class="student-container">
        <ul class="student-info">
          <li>Período: {{ data.info.period }}</li>
          <li>Status: {{ data.info.status }}</li>
          <li>Colegio: {{ data.info.college }}</li>
          <li>Mod. Admisión: {{ data.info.admission }}</li>
          <li>Segmento: {{ data.info.segment }}</li>
          <li>Segmento Detalle: {{ data.info.segmentDetail }}</li>
        </ul>
        <div>
          <h4 class="risk-title">Detalle Riesgo de Ingreso:</h4>
          <DividerVue />
          <div class="risk-grid">
            <template v-for="(item, index) in data.risk" :key="index">
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
const data = {
  info: {
    period: '2023 - 1',
    status: 'Alumno Regular',
    college: 'Aldebaran',
    admission: 'Centro Pre',
    segment: 'Sin información',
    segmentDetail: 'Sin información'
  },
  risk: [
    {
      subject: 'Matemática',
      riskLevel: 'Riesgo Sin Definir',
      score: 'Sin Información'
    },
    {
      subject: 'Química',
      riskLevel: 'Riesgo Sin Definir',
      score: 'Sin Información'
    },
    {
      subject: 'Programación',
      riskLevel: 'Riesgo Sin Definir',
      score: 'Sin Información'
    },
    {
      subject: 'Comunicación',
      riskLevel: 'Riesgo Sin Definir',
      score: 'Sin Información'
    }
  ]
}
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
