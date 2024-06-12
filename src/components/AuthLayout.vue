<script setup lang="ts">
import Sidebar from './SideBar/SideBar.vue';
import DarkMode from './DarkMode.vue';


</script>
<template>     
    <div class='relative flex bg-surface dark:bg-dark-surface min-h-screen'>
        <Sidebar />
        <div class="flex-1 min-h-screen">
            <!-- header -->
            <div class="flex flex-row header w-full h-[5%] bg-surface dark:bg-dark-surface">
                <button class="h-12 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </button>
                <DarkMode />
            </div>
            <!-- Page Content -->
            <div class="rounded-s-xl h-[95%]
                bg-background dark:bg-dark-background
                py-8 px-12 dark:text-white
                "
                >Page Content
            </div>
        </div>
        <RouterView />
    </div>
    
</template>

<style lang="">
    
</style>