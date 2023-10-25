<template>
  <div class="container">
    <header class="header-container"><HeaderSection /></header>
    <aside class="menu-container"><SideMenu /></aside>
    <main class="main-container"><slot></slot></main>
    <footer class="footer-container">
      <FooterSection />
    </footer>
  </div>
</template>

<script setup lang="ts">
import FooterSection from '@/components/generalSection/FooterSection.vue'
import HeaderSection from '@/components/generalSection/HeaderSection.vue'
import SideMenu from '@/components/generalSection/SideMenu.vue'
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background-color: $gray-7;
  display: grid;
  grid-template-columns: 63px 1fr;
  grid-template-rows: 65px 1fr 51px;
  grid-template-areas:
    'header header'
    'menu main'
    'menu footer';
}
.header-container {
  grid-area: header;
}
.menu-container {
  grid-area: menu;
}
.main-container {
  grid-area: main;
}
.footer-container {
  grid-area: footer;
}
</style>
