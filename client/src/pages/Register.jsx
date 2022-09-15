import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../components/header/Header';
import { _Register } from '../redux/actions/authAction';

export default function Register() {

    let [data,setData] = useState();
    let dispatch = useDispatch()

    let handleChange = (e)=>{
        setData(prev=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        _Register(dispatch,data);
    }

  return (
    <div className='container'>
    <Header />
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Register</label>
        <input value={data?.name||''} name='name' onChange={handleChange} type="text" placeholder='User Name'/>
        <input value={data?.password||''} name='password' onChange={handleChange} type="text" placeholder='Password'/>
        <input type='submit' value='Register' />
        <Link to='/login'>if you have an account then login.</Link>
      </form>
    </div>
    </div>
  )
}
