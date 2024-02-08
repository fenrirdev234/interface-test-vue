<template>
  <div class="nav-content">
    <button class="nav-icon">
      <span class="material-icons-round nav-icon--size"> language </span>
    </button>
    <button class="nav-icon">
      <span class="material-icons-round nav-icon--size"> dark_mode </span>
    </button>
    <button class="nav-icon notification-icon">
      <span class="material-icons-round nav-icon--size"> notifications </span>
    </button>
    <div class="header-user">
      <div class="name-content">
        <div class="name skeleton">Xxxxxx Xxxxx</div>
        <div class="job skeleton">Xxxxx</div>
      </div>

      <div class="image-container skeleton">
        <div class="login-color skeleton" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
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

.skeleton {
  @include skeletonLoad;
}
.login-color {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  position: absolute;
  border: 1.5px solid $white-1;
  right: -1.5px;
  bottom: -1.5px;
}

.name-content {
  color: $white-1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow-wrap: break-word;
  align-items: end;
}

.name {
  border-radius: 2.5rem;
  color: transparent;
  font-size: 14px;
  display: flex;
  word-wrap: break-word;
  white-space: nowrap;
}
.job {
  border-radius: 2.5rem;
  color: transparent;
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
</style>
