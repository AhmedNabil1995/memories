import * as API from '../Api';
import { ADD_COMMENT,DELETE_COMMENT,FETCH_COMMENTS } from '../constant';

export const addComment = async (dispatch,token,data)=>{
    
    try{
        let res= await API.addComment(token,data);
        dispatch({type:ADD_COMMENT,payload:res.data})
    }catch(err){
        console.log(err)
}

}

export const deleteComment = async (dispatch,token,id)=>{
    
    try{
        let res= await API.deleteComment(token,id);
        dispatch({type:DELETE_COMMENT,payload:res.data})
    }catch(err){
        console.log(err)
}

}

export const getComments = async (dispatch,token,postId)=>{
    
    try{
        let res= await API.getComments(token,postId);
        dispatch({type:FETCH_COMMENTS,payload:res.data})
    }catch(err){
        console.log(err)
}

}