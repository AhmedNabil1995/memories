import React, { useEffect, useState } from 'react';
import './Card.css';
import {format} from 'timeago.js'
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../redux/actions/postsAction';
import { Link } from 'react-router-dom';

export default function Card({post,setData,token}) {
  let [like,setLike] = useState(post?.likes?.length);
  let dispatch = useDispatch()
  let {user} = useSelector(state=>state.auth);

  function handleRemove(){
    deletePost(dispatch,post._id,token);
  }
function handleUpdate(){
  setData(post);

}

function likeorDislike(){
  
}
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
            <button><i className="fa-solid fa-thumbs-up"></i><span>Likes {like}</span></button>
            {user._id === post?.creator._id.toString()&&<button onClick={handleRemove}><i className="fa-solid fa-trash"></i><span>Delete</span></button>}
        </div>
      </div>
    </div>
  )
}
