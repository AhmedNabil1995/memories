import { combineReducers } from "redux";
import  authReducer  from "./authReducer";
import commnetReducer from "./commentReducer";
import postsReducer from './postsReducer'


const allReducers = combineReducers({
    posts : postsReducer,
    auth : authReducer,
    comments : commnetReducer,
})


export default allReducers;