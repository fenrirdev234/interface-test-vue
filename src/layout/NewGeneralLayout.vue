<template>
  <div class="container">
    <header class="container-header">
      <HeaderSection />
    </header>

    <div class="container-main">
      <side class="container-side">
        <SideMenu />
      </side>
      <div>
        <section class="container-page">
          <slot></slot>
        </section>
        <footer class="container-footer">
          <FooterSection />
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FooterSection from '@/components/generalSection/FooterSection.vue'
import HeaderSection from '@/components/generalSection/HeaderSection.vue'
import SideMenu from '@/components/generalSection/SideMenu.vue'
</script>

<style scoped>
.container {
  width: 100%;
  min-width: 100vh;
}
.container-main {
  display: flex;
  width: 100%;
}
.container-footer {
  height: 52px;
}

.container-side {
  width: 65px;
  height: 100%;
}

.container-page {
  width: 100%;
}

@include mediaMin(600px) {
}
</style>
