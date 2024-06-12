<script setup lang="ts">
import SideBarNavItem from './SideBarNavItem.vue'
import DashboardIcon from './icons/DashboardIcon.vue';
import CardsIcon from './icons/CardsIcon.vue';
import ExpensesIcon from './icons/ExpensesIcon.vue';
import InvestimentsIcon from './icons/InvestimentsIcon.vue';   
import SettingsIcon from './icons/SettingsIcon.vue';

interface NavItem{
    title: string;
    icon: Object;
}
const navItems: NavItem[] = [
    {title: 'Dashboard', icon: DashboardIcon},
    {title: 'Cards', icon: CardsIcon},
    {title: 'Expenses', icon: ExpensesIcon},
    {title: 'Investments', icon: InvestimentsIcon},
    {title: 'Settings', icon: SettingsIcon},
]
</script>

<template>
    <nav class="px-4 pr-6 mt-14 flex flex-col ">
        <SideBarNavItem 
            v-for="item in navItems"
            :key="item.title"
            :title="item.title"
            :icon="item.icon"
        />
    </nav>
</template>