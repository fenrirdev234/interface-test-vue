<template>
  <div class="header">
    <div class="header-container">
      <div></div>
      <div class="info-content">
        <!-- <div class="nav-content">
          <button class="nav-icon">
            <span class="material-icons-round nav-icon--size"> language </span>
          </button>
          <button class="nav-icon">
            <span class="material-icons-round nav-icon--size"> dark_mode </span>
          </button>
          <button class="nav-icon notification-icon">
            <span class="material-icons-round nav-icon--size"> notifications </span>
            <div class="notification-number" v-if="dataUser && dataUser?.notification.length > 0">
              <span>
                {{ dataUser?.notification.length }}
              </span>
            </div>
          </button>
          <div class="header-user">
            <div class="name-content">
              <div class="name">{{ dataUser?.name }}</div>
              <div class="job">{{ dataUser?.rol }}</div>
            </div>

            <div class="image-container">
              <div class="image-content">
                <img
                  class="info-image"
                  width="38"
                  height="38"
                  :src="dataUser?.image"
                  :alt="dataUser?.name"
                />
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
        </div> -->
        <Suspense>
          <HeaderStatus />
          <template #fallback>
            <HeaderStatusSkeletonVue />
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '../../hooks/useFetch'
import { API_ENDPOINTS } from '@/services/endpoint'
import { type IUser } from '../../interfaces/IUser'
import { onMounted, ref, type Ref } from 'vue'
import HeaderStatusSkeletonVue from '../ui/headerStatus/HeaderStatusSkeleton.vue'
import HeaderStatus from '../ui/headerStatus/HeaderStatus.vue'

const dataUser: Ref<IUser | null> = ref(null)

onMounted(async () => {
  const { data } = await useFetch<IUser>(API_ENDPOINTS.USER)

  dataUser.value = data.value
})
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 63px;
  background-color: $violet-1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-container {
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 22px;
}

.header-user {
  display: flex;
  gap: 14px;
}
.image-container {
  width: 38px;
  height: 38px;
  border: 1.5px solid $violet-2;
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
  border: 1.5px solid $white-1;
  right: -1.5px;
  bottom: -1.5px;
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
  color: $white-1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-wrap: break-word;
  align-items: end;
}
.info-content {
  display: flex;
  align-items: center;
}
.name {
  font-size: 14px;
  display: flex;
  word-wrap: break-word;
  white-space: nowrap;
}
.job {
  display: flex;
  font-size: 12px;
}

.nav-content {
  display: flex;
  gap: 14px;
}
.nav-icon {
  color: $white-1;
  display: flex;
  align-items: center;
}
.nav-icon--size {
  width: 24px;
  height: 21px;
  font-size: 24px;
  font-weight: 400;
  line-height: 21px;
}

.notification-icon {
  position: relative;
}
.notification-number {
  position: absolute;
  height: 18px;
  width: 18px;
  top: -1px;
  right: -6px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 50%;
  background-color: $red-1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white-1;
}

.notification-number span {
  padding-right: 0px;
}
</style>
