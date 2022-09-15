import Header from '../components/header/Header';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {_Login} from '../redux/actions/authAction';


export default function Register() {

    let dispatch = useDispatch();
    let [data,setData] = useState();

    let handleChange = (e)=>{
        setData(prev=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        _Login(dispatch,data)
    }

  return (
    <div className='container'>
    <Header />
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Login</label>
        <input value={data?.name||''} name='name' onChange={handleChange} type="text" placeholder='User Name'/>
        <input value={data?.password||''} name='password' onChange={handleChange} type="text" placeholder='Password'/>
        <input type='submit' value='Login' />
        <Link to='/register'>you don't have an account then register.</Link>
      </form>
    </div>
    </div>
  )
}
