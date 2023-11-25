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
            <div class="notification-number" v-if="dataUser && dataUser?.notification.length > 0">
              <span>
                {{ dataUser?.notification.length }}
              </span>
            </div>
          </button>
        </nav>
        <div class="name-content">
          <div class="name">{{ dataUser?.name }}</div>
          <div class="job">{{ dataUser?.rol }}</div>
        </div>

        <div class="image-container">
          <div class="image-content">
            <img class="info-image" :src="dataUser?.image" :alt="dataUser?.name" />
          </div>
          <div
            class="login-color"
            :class="{
              'login-color__orange': dataUser?.state === 'occupied',
              'login-color__green': dataUser?.state === 'available',
              'login-color__none': dataUser?.state === 'inactive'
            }"
          />
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
import { useFetch } from '../../hooks/useFetch'
import { API_ENDPOINTS } from '@/services/endpoint'
import { type IUser } from '../../interfaces/IUser'
import { onMounted, ref, type Ref } from 'vue'

const dataUser: Ref<IUser | null> = ref(null)

onMounted(async () => {
  const { data } = await useFetch<IUser>(API_ENDPOINTS.USER)

  dataUser.value = data.value
})
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 52px;
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
  border: 2px solid $violet-2;
  border-radius: 50%;
  background-color: $violet-2;
  position: relative;
}
.image-content {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  object-position: center;
}

.info-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: right top;
}
.login-color {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: $white-1;
  position: absolute;
  border: 2px solid $white-1;
  right: -2px;
  bottom: -2px;
}
.login-color__green {
  background-color: $green-1;
}
.login-color__orange {
  background-color: $orange-1;
}
.login-color__none {
  display: none;
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
  .header {
    height: 63px;
  }
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
