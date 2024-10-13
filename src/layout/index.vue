<script setup>
import Header from './Header/index.vue'
</script>

<template>
  <header>
    <Header/>
  </header>
  <main>
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style scoped>

</style>