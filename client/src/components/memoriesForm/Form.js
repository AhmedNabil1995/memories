import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../../helper';
import { createPost, updatedPost } from '../../redux/actions/postsAction';
import './Form.css';

export default function Form({data,setData,token}) {

  let dispatch = useDispatch();
  let [file,setFile] = useState(null);
  let {user} = useSelector(state=>state.auth)
  let fileInput = useRef();

  const handleChange = (e)=>{
    setData(prev=>{
        return {...prev,[e.target.name]:e.target.value}
    })
  }
const handleSubmit =(e)=>{
  e.preventDefault();
  if(data.tags){
   data.tags = data.tags.split(',');
  }
  data.creator = user._id;
  uploadFile(file,(url)=>{
    if(!data._id){
      data.selectedFile = url;
      createData()
    }else{
      if(file){
      data.selectedFile = url;
      }
      updateData();
    }
  });
  
  setData({});
  setFile(null);
  fileInput.current.value = '';
}

function createData(){
  createPost(dispatch,data,token);
}

function updateData(){
  updatedPost(dispatch,data._id,data,token);
}

  return (
    <div className='memoriesForm'>
      <form onSubmit={handleSubmit}>
        <label>Creating Memories</label>
        <input value={data?.title||''} type='text' name='title' placeholder='Title' onChange={handleChange}/>
        <textarea value={data?.message||''} name='message' placeholder='Message' onChange={handleChange}></textarea>
        <input value={data?.tags||''} type='text' name='tags' placeholder='Tags( comma seperator)' onChange={handleChange}/>
        <input ref={fileInput} name='file' type='file' onChange={(e)=>setFile(e.target.files[0])}/>
        <input type="submit" value='Submit'/>
      </form>
    </div>
  )
}
