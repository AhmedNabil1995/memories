import './App.css';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Single from './pages/Single';
import Login from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import Profile from './pages/Profile';

function App() {
  let {user} = useSelector(state=>state.auth);
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={user?<Home token={user?.token}/>:<Navigate to={'/login'}/>}/>
      <Route path='/post/:id' element={user?<Single token={user?.token}/>:<Navigate to={'/login'}/>}/>
      <Route path='/login' element={user?<Navigate to={'/'}/>:<Login />} />
      <Route path='/register' element={user?<Navigate to={'/'}/>:<Register />} />
      <Route path='/profile/:id' element={user?<Profile token={user?.token}/>:<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
