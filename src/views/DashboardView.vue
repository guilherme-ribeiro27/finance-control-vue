<script>
    import { useDark } from '@vueuse/core'
    import SideBar from '../components/SideBar/SideBar.vue'
    export default{
        name: 'DashboardView',
        data(){
            return{
                isDark: useDark()
            }
        },
        methods:{
            
        },
        components:{
        }
    }
</script>

<template>
    <div></div>
</template>