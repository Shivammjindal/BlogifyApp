import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
      
      <div className='h-48 w-full my-16'>
      <hr/>
        <div className=' flex w-10/12 justify-between mx-auto gap-9 my-7'>
          <div className='flex w-4/12 items-center'>
            <NavLink to="/">
              <img src="https://thumbs.dreamstime.com/b/basic-rgb-145958704.jpg" alt="" className=' h-32 w-32' />
            </NavLink>
            <div className='text-3xl font-bold'>
              <div className=' text-emerald-800'>UniTe To DO</div>
              <div className=' text-blue-800'>Better... </div>
            </div>
            
          </div>
          
          <div className=' text-slate-900 font-medium text-[1rem]'>
            <div className=' hover:text-orange-700'>
              <div className="text-slate-500 text-[1.1rem]">
                ABOUT SITE
              </div>
            </div>
            <div>
              <NavLink to="/about">
                Account
              </NavLink>
            </div>
            <div>
              <NavLink to="/help">
                Help
              </NavLink>
            </div>
            <div>
              <NavLink to="/contactus">
                Contact Us
              </NavLink>
            </div>
          </div>


          <div className=' text-slate-900 font-medium text-[1rem]'>
            <div className=' hover:text-orange-700'>
              <div className="text-slate-500 text-[1.1rem]">
                PRODUCT
              </div>
            </div>
            <div>
              <NavLink>
                Post
              </NavLink>
            </div>
            <div>
              <NavLink>
                Upload
              </NavLink>
            </div>
            <div>
              <NavLink>
                Explore
              </NavLink>
            </div>
          </div>

          <div className=' text-slate-900 font-medium text-[1rem]'>
            <div className=' hover:text-orange-700'>
              <div className="text-slate-500 text-[1.1rem]">
                CONNECT
              </div>
            </div>
            <div>
              <NavLink>
                Instagram
              </NavLink>
            </div>
            <div>
              <NavLink>
                Github
              </NavLink>
            </div>
            <div>
              <NavLink>
                Twitter
              </NavLink>
            </div>
          </div>
          


        </div>
      </div>
    </>
  )
}

export default Footer