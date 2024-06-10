<script>
import Auth from '../services/auth'
import { toast } from 'vue3-toastify';
import { useDark } from '@vueuse/core'
const isDark = useDark()
export default{
    name: 'LoginView',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        async submit(){
            const payload = {
                email: this.email,
                password: this.password
            }
            const {status} = await Auth.login(payload)
            if(status === 400 || status === 401){
                toast.error('Invalid credentials', {position: 'bottom-center', theme: isDark.value ? 'dark' : 'light'})
            }else if(status === 500){
                console.log('Server error')
                toast.error('Server error', {position: 'bottom-center', theme: isDark.value ? 'dark' : 'light'})    
            }else{
                this.$router.push({name: 'dashboard'})
            }
        },
        notify(){
            toast("Wow so easy !", {
                autoClose: 1000,
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }
    }
}
</script>

<template>
        <!-- <button @click="notify">Notify</button> -->
        <div class='min-h-96 max-w-md w-full mx-auto p-8 shadow-md rounded bg-surface dark:bg-dark-surface'>
            <h2 class="text-2xl font-semibold mb-4 text-title dark:text-dark-title text-center">Login</h2>
            <form @submit.stop.prevent="submit">
                <!-- Email -->
                <div class='mt-4'>
                    <label for="email" class='text-sm text-title dark:text-dark-title'>Email</label>
                    <input type="email" v-model='email' id='email' 
                        class='w-full p-2 mt-1 border border-border dark:border-dark-border rounded dark:bg-dark-surface dark:text-dark-title focus:outline-primary' 
                        required
                    >
                </div>
                <!-- Password -->
                <div class="mt-4">
                    <label for="password" class='text-sm text-title dark:text-dark-title'>Password</label>
                    <input type="password" v-model='password' id='password' 
                        class='w-full p-2 mt-1 border border-border dark:border-dark-border rounded dark:bg-dark-surface dark:text-dark-title focus:outline-primary' 
                        required
                    >
                </div>
                <!-- Forgot password? -->
                <div class='mt-2 text-right'>
                    <a href='#' class='text-sm text-primary dark:text-dark-primary'>Forgot password?</a>
                </div>
                <!-- Submit Button -->
                <div class='mt-4'>
                    <button type='submit' class='w-full p-2 bg-primary text-white rounded'>Login</button>
                </div>
            </form>
            <!-- Register -->
            <div class='mt-4 text-center'>
                <span class='text-sm text-title dark:text-dark-title'>Don't have an account? </span>
                <RouterLink to='/register' class='text-sm text-primary dark:text-dark-primary'>Register</RouterLink>
            </div>
        </div>
    
    
</template>

