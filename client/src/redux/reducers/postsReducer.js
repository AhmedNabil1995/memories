import {CREATE,DELETE,UPDATE,FETCH_ALL,FETCH_POST, FETCH_OWN, LIKE_POST} from '../constant'

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
            return {posts:[action.payload,...state.posts]};
        case UPDATE: 
        return {posts:state.posts.map((el)=>{
            if(el._id == action.payload._id){return action.payload}
            return el;
        })  }
        case LIKE_POST:
        default :
            return state
    }
}

export default postReducer