import * as API from '../Api';
import { LOGIN, REGISTER } from '../constant';

export const _Register = async (dispatch,user)=>{
    
    try{
        await API.register(user);
        dispatch({type:REGISTER})
    }catch(err){
        console.log(err)
}

}

export const _Login = async (dispatch,user)=>{
    
    try{
        let {data} = await API.login(user);
        dispatch({type:LOGIN,payload:data})
    }catch(err){
        console.log(err)
}

}

export const _LogOut = (dispatch)=>{
    dispatch({type:'logout'});
}