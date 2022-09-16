import React, { useEffect, useState } from 'react';
import './Card.css';
import {format} from 'timeago.js'
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, likePost } from '../../redux/actions/postsAction';
import { Link } from 'react-router-dom';

export default function Card({post,setData,token}) {
  let dispatch = useDispatch()
  let {user} = useSelector(state=>state.auth);
  let [likes,setLikes] = useState(post?.likes?.length)
  let [isLiked,setIsLike] = useState(false);
  function handleRemove(){
    deletePost(dispatch,post._id,token);
  }
function handleUpdate(){
  setData(post);

}

function likeorDislike(id){
  likePost(dispatch,token,id)
  if(isLiked){
    setIsLike(false)
    setLikes(prev=>--prev)
  }else{
    setIsLike(true)
    setLikes(prev=>++prev)
  }
}
useEffect(()=>{
  if(post?.likes.includes(user._id)){
    setIsLike(true)
  }else{
    setIsLike(false);
  }
},[])
  return (
    <div className='memoriesCard'>
      <div className='img-container'><img src={post.selectedFile} alt=''/></div>
      <Link to={`/profile/${post.creator._id}`}><span className='creator'>{post.creator?.name}</span></Link>
      {user._id === post?.creator._id.toString()&&<span className='dots' onClick={handleUpdate}>...</span>}
      <span className='publish-date'>{format(post.createdAt)}</span>
      <div className='card-body'>
        <p className='tags'>{post.tags.join(',')}</p>
        <p className='title'><Link to={`/post/${post._id}`}>{post.title}</Link></p>
        <p className='message'>{post.message}</p>
        <div className='controls'>
            <button onClick={()=>likeorDislike(post._id)}>
              <i className={isLiked?"fa-solid fa-thumbs-up":"fa-regular fa-thumbs-up"}></i>
              <span>Likes {likes}</span>
            </button>
            {user._id === post?.creator._id.toString()&&<button onClick={handleRemove}><i className="fa-solid fa-trash"></i><span>Delete</span></button>}
        </div>
      </div>
    </div>
  )
}
