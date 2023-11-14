<template>
  <div class="container">
    <div class="grid-placeholder"></div>
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

  min-height: 100vh;
  background-color: $gray-7;
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 52px 1fr 51px;
  grid-template-areas:
    'header'
    'main'
    'footer';
}
.header-container {
  grid-area: header;
}
.menu-container {
  z-index: 4;
  grid-area: menu;
  display: none;
}
.main-container {
  grid-area: main;
  display: flex;
  justify-content: center;
}
.footer-container {
  grid-area: footer;
}
.grid-placeholder {
  display: none;
  width: 100%;
  background-color: $violet-1;
  grid-area: placeholder;
}

@include mediaMin(350px) {
  .menu-container {
    grid-area: menu;
    display: block;
  }
  .container {
    grid-template-columns: 65px 1fr;

    grid-template-areas:
      'header header'
      'menu main'
      'menu footer';
  }
}
@include mediaMin(600px) {
  .container {
    grid-template-rows: 63px 1fr 51px;
  }
}

@include mediaMin(1600px) {
  .container {
    grid-template-areas:
      'placeholder header'
      'menu main'
      'menu footer';
  }
  .grid-placeholder {
    display: block;
  }
}
</style>
