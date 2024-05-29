<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DarkMode from './components/DarkMode.vue'
</script>

<template>
  <main class='w-full min-h-screen flex flex-col gap-y-64 items-center bg-background dark:bg-dark-background'>
    <DarkMode />
    <!-- <MyDiv  /> -->
    <RouterView />

  </main>
</template>


