import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '@/views/DashboardView.vue'
import AuthLayout from '@/components/AuthLayout.vue'
import NoAuthLayout from '@/components/NoAuthLayout.vue'
import Guard from '../services/middleware'
import Cookie from 'js-cookie';
import Auth from '../services/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: NoAuthLayout,
      children:[
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/login',
          name: 'login',
          component : LoginView
        },
        {
          path: '/register',
          name: 'register',
          component: RegisterView
        },
      ]
    },
    {
      path:'/',
      component: AuthLayout,
      children:[
        {
          path: '/dashboard',
          name: 'dashboard',
          component: DashboardView,
        }
      ]
    }
  ]
})

async function auth(to:any, from:any){
  const token = Cookie.get('auth_token');
  console.log(token);
  if(!token){
    router.push({
      name: 'login'
    })
    return;
  }
  
  //refresh token
  try{
    const result = await Auth.refresh(token);
    if(result.status == 200){
      router.push({
        name: to.name
      });
      return;
    }
    else{
      Cookie.remove('auth_token');
      router.push({
        name: 'login'
      }); 
    }
  }catch(err){
    //remove from cookie
    Cookie.remove('auth_token');
    router.push({
      name: 'login'
    });
  }
}
export default router
