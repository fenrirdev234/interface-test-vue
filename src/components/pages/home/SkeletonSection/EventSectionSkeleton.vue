<template>
  <article class="event-container">
    <div class="card-event" />
    <div class="card-event" />
    <div class="card-event" />
    <div class="card-event" />
    <div class="card-event" />
  </article>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.event-container {
  padding: 20px 0px;

  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

@include mediaMin(1420px) {
  .event-container {
    flex-wrap: nowrap;
  }
}

.card-event {
  padding: 15px;
  background-color: $white-1;
  border-radius: 6px;
  @include shadowMix;
  max-width: 207px;
  width: 100%;
  height: 109px;
}
</style>
