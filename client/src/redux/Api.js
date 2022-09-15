import axios from 'axios';

let url = 'http://localhost:5000'

export const getPosts = (token,id)=> axios.get(`${url}/posts/profile/${id}`,{
    headers:{token}
})

export const getTimeLine = (token)=> axios.get(`${url}/posts/timeline`,{
    headers:{token}
})

export const getPost = (id,token)=> axios.get(`${url}/posts/${id}`,{
    headers:{token}
})

export const createPost = (newPost,token)=> axios.post(`${url}/posts`,newPost,{
    headers:{token}
})

export const updatePost = (id,updatedPost,token)=> axios.patch(`${url}/posts/${id}`,updatedPost,{
    headers:{token}
})

export const deletePost = (id,token)=> axios.delete(`${url}/posts/${id}`,{
    headers:{token}
})

export const register = (user)=> axios.post(`${url}/auth/register`,user);

export const login = (user)=> axios.post(`${url}/auth/login`,user);

export const addComment = (token,data)=> axios.post(`${url}/comments`,data,{
    headers:{token}
})

export const deleteComment = (token,commentId)=> axios.delete(`${url}/comments/${commentId}`,{
    headers:{token}
})

export const getComments = (token,postId)=> axios.get(`${url}/comments/${postId}`,{
    headers:{token}
})