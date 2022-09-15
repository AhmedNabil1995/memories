import { getCookie, setCookie } from "../../cookie";
import { LOGIN, REGISTER } from "../constant"

let intialState = {user:getCookie('user')?JSON.parse(getCookie('user')):null}

    const authReducer =(state=intialState,action)=>{
    switch(action.type){
        case REGISTER :
                return state;
        case LOGIN : 
            setCookie('user',JSON.stringify(action.payload))
            return {...state,user:action.payload};
        case 'logout':
            return {user:null};
        default:
            return state;
    }
}

export default authReducer