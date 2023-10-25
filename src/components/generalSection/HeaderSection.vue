<template>
  <div class="header">
    <div class="header-container">
      <div>
        <IconEdmachina />
      </div>
      <div class="info-content">
        <nav class="nav-content">
          <button class="nav-icon">
            <IconGlobalVue />
          </button>
          <button class="nav-icon">
            <IconMoonVue />
          </button>
          <button class="nav-icon">
            <IconBellVue />
            <div class="notification-number">
              <spam>4</spam>
            </div>
          </button>
        </nav>
        <div class="name-content">
          <h4 class="name">Hellen Smith</h4>
          <h4 class="job">Admin</h4>
        </div>

        <div class="image-container">
          <div class="login-color" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconBellVue from '../icons/IconBell.vue'
import IconEdmachina from '../icons/IconEdmachina.vue'
import IconGlobalVue from '../icons/IconGlobal.vue'
import IconMoonVue from '../icons/IconMoon.vue'
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 100%;
  background-color: $violet-1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-container {
  max-width: 1600px;
  width: 100%;
  padding-left: 22px;
  padding-right: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image-container {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: $violet-2;
  position: relative;
}
.login-color {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: $green-1;
  position: absolute;
  border: 2px solid $white-1;
  right: 0;
  bottom: 0;
}
.name-content {
  padding-right: 15px;
  color: $white-1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: end;
  font-weight: 600;
}
.info-content {
  display: flex;
  align-items: center;
}
.name {
  font-size: 12px;
  padding-bottom: 4px;
}
.job {
  font-size: 10px;
}
.nav-content {
  display: flex;
  gap: 20px;
  padding-right: 20px;
}
.nav-icon {
  position: relative;
  height: 20px;
}
.notification-number {
  position: absolute;
  height: 18px;
  width: 18px;
  top: -8px;
  right: -11px;
  font-weight: 600;
  font-size: 10px;
  border-radius: 50%;
  background-color: $red-1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white-1;
}
</style>
