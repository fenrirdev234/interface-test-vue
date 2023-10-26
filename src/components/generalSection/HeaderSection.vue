<template>
  <div class="header">
    <div class="header-container">
      <div class="header-logo">
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
          <div class="name">Hellen Smith</div>
          <div class="job">Admin</div>
        </div>

        <div class="image-container">
          <div class="login-color" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconBellVue from '../icons/headerIcons/IconBell.vue'
import IconEdmachina from '../icons/headerIcons/IconEdmachina.vue'
import IconGlobalVue from '../icons/headerIcons/IconGlobal.vue'
import IconMoonVue from '../icons/headerIcons/IconMoon.vue'
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
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-logo {
  width: 120px;
}
.image-container {
  width: 33px;
  height: 33px;
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
  padding-right: 8px;
  color: $white-1;
  display: flex;
  flex-direction: column;
  width: auto;
  font-weight: 600;
  max-width: 200px;
  overflow-wrap: break-word;
  align-items: end;
}
.info-content {
  display: flex;
  align-items: center;
}
.name {
  font-size: 10px;
  padding-bottom: 2px;
  width: auto;
  display: flex;
  word-wrap: break-word;
  white-space: nowrap;
}
.job {
  display: flex;
  font-size: 8px;
  width: auto;
}

.nav-content {
  display: flex;
  gap: 12px;
  padding-right: 12px;
}
.nav-icon {
  position: relative;
  height: 20px;
}
.notification-number {
  position: absolute;
  height: 14px;
  width: 14px;
  top: -6px;
  right: -7px;
  font-weight: 600;
  font-size: 8px;
  border-radius: 50%;
  background-color: $red-1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white-1;
}

@include mediaMin(600px) {
  .header-logo {
    width: 146px;
  }
  .nav-content {
    gap: 20px;
    padding-right: 20px;
  }

  .name {
    font-size: 12px;
    padding-bottom: 4px;
  }
  .job {
    font-size: 10px;
  }

  .notification-number {
    height: 18px;
    width: 18px;
    top: -8px;
    right: -11px;
    font-size: 10px;
  }
  .image-container {
    width: 38px;
    height: 38px;
  }
  .name-content {
    padding-right: 15px;
  }
  .header-container {
    padding-left: 22px;
    padding-right: 22px;
  }
}
</style>
