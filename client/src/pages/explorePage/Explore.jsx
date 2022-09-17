import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/Header'
import Card from '../../components/memoriesCard/Card'
import { getExplorePosts } from '../../redux/actions/postsAction';

const Explore = ({token}) => {
    let {posts} = useSelector(state=>state.posts);
    let dispatch = useDispatch();

    
  
  useEffect(()=>{
    getExplorePosts(dispatch,token)
  },[])
  return (
    <div className="explore">
        <div className="container">
          <Header />
          <div className='all-container'>  
              <div className='card-container'>
                {posts?.length?posts.map((el,i)=>{
                    return (
                          <Card token={token} key={i} post={el}/>
                    )
                }):''}
              </div>
          </div>
        </div>
      </div>
  )
}

export default Explore