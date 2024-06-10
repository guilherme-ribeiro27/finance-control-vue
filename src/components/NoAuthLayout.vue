<script setup lang="ts">
import DarkMode from './DarkMode.vue'
</script>
<template>
    <main class='w-full min-h-screen flex flex-col gap-y-56 items-center bg-background dark:bg-dark-background'>
        <DarkMode />
        <!-- <MyDiv  /> -->
        <RouterView />
    
      </main>
</template>

<style lang="">
    
</style>