import React, { useState } from 'react'
import Card from '../components/memoriesCard/Card';
import Form from '../components/memoriesForm/Form';
import {useDispatch,useSelector} from 'react-redux';
import { useEffect } from 'react';
import Header from '../components/header/Header';
import { getTimeLine } from '../redux/actions/postsAction';


const Home = ({token}) => {
    let {posts} = useSelector(state=>state.posts);
    let dispatch = useDispatch();
  let [data,setData] = useState({});
    
  
  useEffect(()=>{
    getTimeLine(dispatch,token)
  },[])
  
  
    return (
      <div className="App">
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
            <Form token={token} data={data} setData={setData}/>
          </div>
        </div>
      </div>
    );
}

export default Home