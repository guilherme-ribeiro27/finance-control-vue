<script setup lang="ts">
interface Props {
    title: string;
    icon: Object;
}
defineProps<Props>()

</script>

<!-- rounded-lg
border-2 -->
<template>
    <a href="" class='flex flex-row items-center text-secondary dark:text-dark-secondary gap-2 py-3 px-2 rounded-lg hover:text-primary hover:dark:text-primary hover:border hover:dark:bg-dark-hightlight'>
        <component :is="icon"></component>
        <span>{{title}}</span>
    </a>
</template>