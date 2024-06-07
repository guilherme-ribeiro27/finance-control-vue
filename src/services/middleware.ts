import Cookie from 'js-cookie';
import Auth from '../services/auth'

export default{
    async auth(to:any, from:any, next:any):Promise<string>{
        const token = Cookie.get('auth_token');
        if(!token){
            next('/login');
            return '/login';
        }else if(to.path == '/login' || to.path == '/register'){
            next('/dashboard');
            return '/dashboard';
        }
        
        //refrsh token
        try{
            const result = await Auth.refresh(token);
            if(result.status == 200){
                next();
                return to.path;
            }
            else
                return '/login';
        }catch(err){
            return '/login';
        }
    }
}