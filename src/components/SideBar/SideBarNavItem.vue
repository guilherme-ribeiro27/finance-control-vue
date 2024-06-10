<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
    title: string;
    icon: any;
}
const props = defineProps<Props>()
console.log(props.icon)
</script>


<template>
    <a href="" class='flex flex-row items-center'>
        <!-- <slot name="icon"></slot> -->
         {{ icon }}
        <span>{{title}}</span>
    </a>
</template>