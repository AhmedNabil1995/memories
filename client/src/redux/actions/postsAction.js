import * as api from '../Api'
import {CREATE,DELETE,UPDATE,FETCH_ALL,FETCH_POST, FETCH_OWN, LIKE_POST} from '../constant';


export const getPosts = async (dispatch,token,id)=>{
    
    try{
        let {data}  = await api.getPosts(token,id);
        dispatch({type:FETCH_OWN,payload:data})
    }catch(err){
        console.log(err)
}

}

export const getTimeLine = async (dispatch,token)=>{
    
    try{
        let {data}  = await api.getTimeLine(token);
        dispatch({type:FETCH_ALL,payload:data})
    }catch(err){
        console.log(err)
}

}

export const getPost = async (dispatch,id,token)=>{
    
    try{
        let {data}  = await api.getPost(id,token);
        dispatch({type:FETCH_POST,payload:data})
    }catch(err){
        console.log(err)
}

}


export const deletePost = async (dispatch,id,token)=>{
    
    try{
        let {data} = await api.deletePost(id,token);
        dispatch({type:DELETE,payload:data})
    }catch(err){
        console.log(err)
}

}

export const createPost = async (dispatch,d,token)=>{
    
    try{
        let {data}  = await api.createPost(d,token);
        dispatch({type:CREATE,payload:data})
    }catch(err){
        console.log(err)
}

}


export const updatedPost = async (dispatch,id,d,token)=>{
    
    try{
        let {data}  = await api.updatePost(id,d,token);
        dispatch({type:UPDATE,payload:data})
    }catch(err){
        console.log(err)
}

}

export const likePost = async (dispatch,token,postId)=>{
    
    try{
        await api.likePost(token,postId);
        dispatch({type:LIKE_POST})
    }catch(err){
        console.log(err)
}

}