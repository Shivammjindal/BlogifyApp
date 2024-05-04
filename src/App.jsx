import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from "react-router-dom"
import {login, logout} from './store/authSlice';

function App() {

  //loading State
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login(userData))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => {
      setLoading(false)
    })
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <main style={{marginBottom: '300px'}}>
           <Outlet />
        </main>
        <div className='w-full overflow-scroll bg-white' style={{position: 'fixed', bottom: '-12px'}}><Footer/></div>
      </div>
    </div>
  ) : (null)
}

export default App
