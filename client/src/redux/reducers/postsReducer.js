import {CREATE,DELETE,UPDATE,FETCH_ALL,FETCH_POST, FETCH_OWN} from '../constant'

const postReducer = (state = {posts:[]} ,action)=>{
    switch(action.type){

        case FETCH_ALL: 
            return {posts:action.payload};
        case FETCH_OWN: 
            return {posts:action.payload};
        case DELETE: 
             return {posts:state.posts.filter((el)=>{
                return el._id !== action.payload._id
            })}
        case CREATE: 
            return {posts:[...state.posts,action.payload]};
        case UPDATE: 
            return {posts:state.posts.map((el)=>{
                    if(el._id == action.payload._id){return action.payload}
                    return el;
            })  }
        default :
            return state
    }
}

export default postReducer