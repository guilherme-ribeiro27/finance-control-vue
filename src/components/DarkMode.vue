<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
const isDark = useDark()
const toogleDark = useToggle(isDark)
</script>

<template>
    <div class='flex justify-end items-center w-full h-16 px-16'>
        <span
            @click="toogleDark()"
            class="cursor-pointer"
        >
        <FontAwesomeIcon v-if="isDark" :icon="faSun" size="2x" class="dark:text-dark-title"/>
        <FontAwesomeIcon v-else :icon="faMoon" size="2x" />

        </span>
    </div>
    
</template>