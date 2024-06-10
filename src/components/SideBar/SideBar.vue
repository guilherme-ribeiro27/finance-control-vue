<script setup>
import DarkMode from '../DarkMode.vue';
import SideBarAvatar from './SideBarAvatar.vue';
import SideBarNav from './SideBarNav.vue';
</script>
<template >
    <!-- <div class='relative flex min-h-screen bg-surface dark:bg-dark-surface'> -->
        <!-- Sidebar -->
        <div class='bg-surface dark:bg-dark-surface text-cyan-50 w-64'>
           <SideBarAvatar />
           <SideBarNav />
        </div>
        <!-- Main Content -->
        <!-- <div class="flex-1 min-h-screen"> -->
            <!-- header -->
            <!-- <div class="header w-full h-[5%] bg-surface dark:bg-dark-surface"> -->
                <!-- <DarkMode /> -->
            <!-- </div> -->
            <!-- Page Content -->
            <!-- <div class="rounded-s-xl h-[95%] -->
                <!-- bg-background dark:bg-dark-background -->
                <!-- py-8 px-12 dark:text-white -->
                <!-- " -->
                <!-- >Page Content -->
            <!-- </div> -->
        <!-- </div> -->
    <!-- </div> -->
</template>
 