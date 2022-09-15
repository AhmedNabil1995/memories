import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Header from '../components/header/Header'
import Card from '../components/memoriesCard/Card'
import Form from '../components/memoriesForm/Form';
import { getPosts } from '../redux/actions/postsAction';

const Profile = ({token}) => {
    let {posts} = useSelector(state=>state.posts);
  let {user} = useSelector(state=>state.auth);
  let [data,setData] = useState({});
  let dispatch = useDispatch();
    let {id} = useParams();
    
  
  useEffect(()=>{
    getPosts(dispatch,token,id)
  },[id])

  return (
    <div className='profile'>
        <div className="container">
          <Header />
          <div className='all-container'>  
              <div className='card-container'>
                {posts?.length?posts.map((el,i)=>{
                    return (
                          <Card token={token} setData={setData} key={i} post={el}/>
                    )
                }):''}
              </div>
            {user._id === id&&<Form token={token} data={data} setData={setData}/>}
          </div>
        </div>
    </div>
  )
}

export default Profile