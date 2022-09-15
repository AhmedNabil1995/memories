import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { format } from 'timeago.js';
import Header from '../components/header/Header';
import Comment from '../components/comment/Comment';
import { getComments,addComment, deleteComment } from '../redux/actions/commentAction';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
const Single = ({token}) => {
    let [post,setPost] = useState(null);
    let {id} = useParams();
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let {comments} = useSelector(state=>state.comments);
    let commentInput = useRef();

    let url = 'http://localhost:5000';

    useEffect(()=>{
        const getPost= async()=>{
          let res =  await axios.get(`${url}/posts/${id}`,{
            headers:{token}
          })
          setPost(res.data);
        }
        getPost();
    },[])

    useEffect(()=>{
     post && getComments(dispatch,token,id);
    },[post])

    const goBack = ()=>{
      navigate(-1);
    }

    const handleAddComment=()=>{
      let comment = commentInput.current.value;
      let data = {comment,creator:post.creator._id,post:post._id};
      addComment(dispatch,token,data);
    }

    const handleDeleteComment = (id)=>{
      deleteComment(dispatch,token,id)
    }

  return (
    <div className='container'>
                <Header />
    <div className='single'>
        <div className='img-container'>
            <button className='back' onClick={goBack}>back</button>
            <img src={post?.selectedFile} alt=''/>
        </div>
      <div className='content'>
      <span className='creator'><span className='desc'>Created By:</span> {post?.creator?.name}</span>
      <span className='publish-date'> {format(post?.createdAt)}</span>
        <p className='title'><span className='desc'>Title:</span> {post?.title}</p>
        <p className='tags'><span className='desc'>Tags:</span> {post?.tags}</p>
        <p className='message'><span className='desc'>Message:</span> {post?.message}</p>

        <div className='commentsContainer'>
          <div className='addComment'>
            <input ref={commentInput} name='comment' placeholder='say your opinion..'/>
            <button onClick={handleAddComment}>Add</button>
          </div>
          {comments.map((comment)=>{
            return <Comment key={comment._id} comment={comment} deleteComment={handleDeleteComment}/>
          })}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Single