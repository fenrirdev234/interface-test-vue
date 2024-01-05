<template>
  <div class="side-container">
    <div class="section-container section-container__1"></div>
    <div class="section-container section-container__2" />
    <div class="section-container section-container__3" />
    <div class="section-container section-container__4" />
    <div class="section-container section-container__5" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.side-container {
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 10px;
  padding-right: 15px;
}
.section-container {
  border-radius: 6px;
  background-color: $white-1;
  padding: 15px;
  @include shadowMix;
}

.section-container__1 {
  height: 220px;
}

.section-container__2 {
  height: 450px;
}
.section-container__3 {
  height: 370px;
}
.section-container__4 {
  height: 388px;
}
.section-container__5 {
  height: 45px;
}
</style>
