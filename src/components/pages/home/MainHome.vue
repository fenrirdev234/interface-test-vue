<template>
  <section class="main-section">
    <article class="first-article">
      <nav class="main-nav">
        <a> Record Details </a><span> / </span>
        <a>AYSI32392</a>
      </nav>
      <div class="main-icons">
        <IconEditVue />
      </div>
    </article>
    <TabsAlter>
      <TabAlter title="Overview">
        <TabsVue>
          <TabVue title="First Tab">
            <TimelineActivity />
          </TabVue>
          <TabVue title="jljl"> </TabVue>
          <TabVue title="First sdfdsfbhfdh"></TabVue>
        </TabsVue>
      </TabAlter>
      <TabAlter title="Enrollment"></TabAlter>
      <TabAlter title="Academic"></TabAlter>
    </TabsAlter>
  </section>
</template>

<script setup lang="ts">
import TabsAlter from '@/components/ui/Tab/TabsAlter.vue'

import TabAlter from '@/components/ui/Tab/TabAlter.vue'

import TabsVue from '@/components/ui/Tab/TabsVue.vue'
import TabVue from '@/components/ui/Tab/TabVue.vue'
import TimelineActivity from '@/components/ui/Timelime.vue/TimelineActivity.vue'
import IconEditVue from '@/components/icons/homeIcons/IconEdit.vue'
</script>

<style scoped lang="scss">
.main-nav {
  color: $violet-2;
  font-size: 13px;
  font-weight: 600;
  display: flex;

  gap: 4px;
}
.first-article {
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-right: 14px;
}
.main-icons {
  width: 16px;
  height: 16px;
}

.main-section {
  width: 100%;
}
</style>
