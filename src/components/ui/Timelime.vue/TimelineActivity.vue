<template>
  <div>
    <header class="header-timeline">
      <h4 class="header-timeline__title">Timeline</h4>
      <div class="timeline__filter">
        <DropdownVueVue
          :title="filterTimeline.filter.years.title"
          :data="filterTimeline.filter.years.data"
          @change-selected="filterTime($event)"
        />
        <DropdownVueVue
          :title="filterTimeline.filter.users.title"
          :data="filterTimeline.filter.users.data"
          @change-selected="filterUser($event)"
        />
        <SearchInputVue />
      </div>
    </header>
    <section class="timeline__content">
      <TimelineContent :data="filterTimeline.data" />
    </section>
  </div>
</template>

<script setup lang="ts">
import DropdownVueVue from '../Dropdown/DropdownVue.vue'
import SearchInputVue from '../SearchInput/SearchInput.vue'
import TimelineContent from './TimelineContent.vue'
const filterTimeline = {
  data: [
    {
      autor: 'Gerardo Moyano',
      type: 'email',
      title: 'Email Sent',
      message: 'Upselling email sent.',
      link: 'View Email',
      from: '',
      time: {
        date: 'Sep 23, 2023 - 1:45pm',
        month: 'September',
        year: '2023'
      }
    },
    {
      autor: 'Prof. Jean Charleton',
      type: 'chat',
      title: 'Chat Meeting',
      message: 'Whatsapp chat meeting.',
      link: '',
      from: '',
      time: {
        date: 'Sep 2, 2023 - 1:45pm',
        month: 'September',
        year: '2023'
      }
    },
    {
      autor: 'Danielle Munchen Schollengberd',
      type: 'academy',
      title: 'LMS Assignment Deliveered',
      message:
        ' For:"Carrer Planning and Develoment" \nAssignment Name: "Quiz",  belivered ON Time.\n Grade: TBD',
      link: '',
      from: '',
      time: {
        date: 'Aug 5, 2023 - 5:33pm',
        month: 'August',
        year: '2023'
      }
    },
    {
      autor: '',
      type: 'call',
      title: 'Call',
      message: 'Direct Call made to +52 55 22126164 \nCallDuration: 0 mins. 10 sec.',
      link: '',
      from: 'Gerardo Moyano',
      time: {
        date: 'Aug 4, 2023 - 1:45pm',
        month: 'August',
        year: '2023'
      }
    },
    {
      autor: 'Prof. Jean Charleton',
      type: 'tag',
      title: 'Tag Added',
      message: 'Multiple Problems Injuried, Check, Late',
      link: '',
      from: 'Carrer Planning AndDevelipment',
      time: {
        date: 'Aug 3, 2023 - 5:33pm',
        month: 'August',
        year: '2023'
      }
    },
    {
      autor: 'Gerardo Moyano',
      type: 'tag',
      title: 'Tag Added',
      message: 'Inactive,Control, Schorllarship',
      link: '',
      from: '',
      time: {
        date: 'Aug 2, 2023 - 1:45pm',
        month: 'August',
        year: '2023'
      }
    },
    {
      autor: 'Prof. Jean Charleton',
      type: 'email',
      title: 'Email Sent',
      message: 'Upselling email sent',
      link: 'View Email',
      from: '',
      time: {
        date: 'Aug 2, 2023 - 1:45pm',
        month: 'August',
        year: '2023'
      }
    },
    {
      autor: '',
      type: 'call',
      title: 'Chat Meeting',
      message: 'Direct Call made to +52 55 22126164 \nCall Duration: 1 mins. 22 sec.',
      link: '',
      from: 'Gerardo Moyano',
      time: {
        date: 'Jul 12, 2023 - 1:45pm',
        month: 'July',
        year: '2023'
      }
    },
    {
      autor: '',
      type: 'call',
      title: 'Chat Meeting',
      message: 'Direct Call made to +52 55 22126164 \nCall Duration: 2 mins. 22 sec.',
      link: '',
      from: 'Gerardo Moyano',
      time: {
        date: 'Jul 12, 2023 - 1:45pm',
        month: 'July',
        year: '2023'
      }
    },
    {
      autor: 'Gerardo Moyano',
      type: 'email',
      title: 'Initial Contact',
      message: 'Wellcome email sent.',
      link: 'View Email',
      from: '',
      time: {
        date: 'June 11, 2023 - 1:45pm',
        month: 'June',
        year: '2023'
      }
    }
  ],

  filter: {
    years: {
      title: 'Year',
      data: ['2023', '2022', '2021', '2020']
    },
    users: {
      title: 'Filter by User',
      data: ['Gerardo Moyano', 'Prof. Jean Charleton', 'Danielle Munchen Schollengberd', 'other']
    }
  }
}

const filterTime = (value: string) => {
  console.log(value)
}
const filterUser = (value: string) => {
  console.log(value)
}
</script>

<style scoped lang="scss">
.header-timeline {
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
}
.timeline__filter {
  display: flex;
  gap: 11px;
}
.header-timeline__title {
  color: $gray-1;
  font-weight: 600;
  font-size: 12px;
}

.timeline__content {
  width: 100%;
}
/* @include mediaMin(830px) {
  .header-timeline {
    flex-direction: row;
  }
} */
</style>
