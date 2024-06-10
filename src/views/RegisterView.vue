<script>
export default{
    name: 'RegisterView',
    data(){
        return{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods:{
        submit(){
            fetch('http://localhost:8081/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword
                })
            }).then(res => res.json())
        }
    }
}
</script>

<template>
    <div class='max-w-md w-full mx-auto p-8 shadow-md rounded bg-surface dark:bg-dark-surface'>
        <h2 class="text-2xl font-semibold mb-4 text-title dark:text-dark-title text-center">Register</h2>
        <form @submit.stop.prevent="submit">
            <!-- Full Name -->
            <div class="mt-4">
                <label for="text" class='text-sm text-title dark:text-dark-title'>Name</label>
                <input type="text" v-model='name' id='name' 
                    class='w-full p-2 mt-1 border border-border dark:border-dark-border rounded dark:bg-dark-surface dark:text-dark-title focus:outline-primary' 
                    required
                >
            </div>
            <!-- Email -->
            <div class='mt-4'>
                <label for="email" class='text-sm text-title dark:text-dark-title'>Email</label>
                <input type="email" v-model='email' id='email' 
                    class='w-full p-2 mt-1 border border-border dark:border-dark-border rounded dark:bg-dark-surface dark:text-dark-title focus:outline-primary' 
                    required
                >
            </div>
            <!-- Password -->
            <div class='mt-4'>
                <label for="password" class='text-sm text-title dark:text-dark-title'>Password</label>
                <input type="password" v-model='password' id='password' 
                    class='w-full p-2 mt-1 border border-border dark:border-dark-border rounded dark:bg-dark-surface dark:text-dark-title focus:outline-primary' 
                    required
                >
            </div>
            <!-- Confirm Password -->
            <div class='mt-4'>
                <label for="confirmPassword" class='text-sm text-title dark:text-dark-title'>Confirm Password</label>
                <input type="password" v-model='confirmPassword' id='confirmPassword' 
                    class='w-full p-2 mt-1 border border-border dark:border-dark-border rounded dark:bg-dark-surface dark:text-dark-title focus:outline-primary' 
                    required
                >
            </div>
            <!-- Submit Button -->
            <div class='mt-4'>
                <button type='submit' class='w-full p-2 bg-primary text-white rounded'>Register</button>
            </div>
        </form>
        <!-- Login -->
        <div class='mt-4 text-center'>
            <span class='text-sm text-title dark:text-dark-title'>Already have an account? </span>
            <RouterLink to='/login' class='text-sm text-primary dark:text-dark-primary'>Login</RouterLink>
        </div>
    </div>
</template>