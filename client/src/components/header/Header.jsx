import React from 'react'
import memories from '../../assets/memories.png';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {removeCookie} from '../../cookie';
import { _LogOut } from '../../redux/actions/authAction';
const Header = () => {
  let {user} = useSelector(state=>state.auth)
  let dispatch = useDispatch()
  const logOut=()=>{
    removeCookie('user');
    _LogOut(dispatch);
  }
  return (
    <div className='header'>
        {user&&<Link to={`/explore`} className='explore'><span>Explore</span></Link>}
        <Link to={'/'}><h1>Memories</h1></Link>
        <img src={memories} alt='memories-icon'/>
        <div className='user'>
          {user&&
          <>
          <button onClick={logOut}>logout</button>
          <Link to={`/profile/${user._id}`}><span>{user.name}</span></Link>
          </>
          }
        </div>
    </div>
  )
}

export default Header