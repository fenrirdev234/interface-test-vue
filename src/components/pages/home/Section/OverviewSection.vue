<template>
  <div>
    <TabsVue>
      <TabVue title="Activity">
        <TimelineActivity />
      </TabVue>
      <TabVue title="Emails" type="email"> </TabVue>
      <TabVue title="Calls" type="call"></TabVue>
    </TabsVue>
  </div>
</template>

<script setup lang="ts">
import TabsVue from '@/components/ui/Tab/TabsVue.vue'
import TabVue from '@/components/ui/Tab/TabVue.vue'
import TimelineActivity from '@/components/ui/Timelime.vue/TimelineActivity.vue'
</script>

<style scoped></style>
