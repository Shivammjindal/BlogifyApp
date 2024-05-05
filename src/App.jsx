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
    <div className=''>
      <div className='h-screen flex flex-wrap content-between '>
        <div className='w-full block'>
          <Header />
          <main className='min-h-[500px]'>
            <Outlet/>
          </main>
          <div className='w-full bg-white pb-16 '><Footer/></div>
        </div>
      </div>
    </div>
  ) : (null)
}

export default App
