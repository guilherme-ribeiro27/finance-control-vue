import api from "./http";
import { isAxiosError } from "axios";
import Cookie from 'js-cookie' 
export type LoginReturn = {
    status: number;
};
export interface LoginApiReturn{
    access_token: string;
    token_type: string;
    expires_in: number;

}
export interface RefreshApiReturn extends LoginApiReturn {}

export default {
    async login({email, password}:{email:string, password:string}) :Promise<LoginReturn>{
        const payload = {
            email,
            password
        }
        try{
            const result = await api.post('/auth/login', JSON.stringify(payload));
            const data = result.data as LoginApiReturn;
            Cookie.set('auth_token', data.access_token,{expires: data.expires_in});
            return { status: result.status } ;
        }catch(err){
            if(isAxiosError(err))
                return { status: err.response?.status || 500}
            return { status: 500 }
        }
    },
    async refresh(token: string){
        try{
            const result = await api.post('/auth/refresh', {},{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = result.data as RefreshApiReturn;
            Cookie.set('auth_token', data.access_token,{expires: data.expires_in});
            return { status: result.status } ;
        }catch(err){
            if(isAxiosError(err))
                return { status: err.response?.status || 500}
            return { status: 500 }
        }
    }
}