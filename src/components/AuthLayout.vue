<script setup lang="ts">
import Sidebar from './SideBar/SideBar.vue';
import DarkMode from './DarkMode.vue';


</script>
<template>     
    <div class='relative flex bg-surface dark:bg-dark-surface min-h-screen'>
        <Sidebar />
        <div class="flex-1 min-h-screen">
            <!-- header -->
            <div class="header w-full h-[5%] bg-surface dark:bg-dark-surface">
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