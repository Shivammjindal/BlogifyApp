import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
      
      <div className='h-48 bg-slate-100 pb-4'>
      <hr/>
        <div className='bg-slate-100 flex justify-center mx-auto gap-40 my-7'>
          <div className='flex flex-col w-4/12 gap-5'>
            <NavLink to="/" className={`flex items-center`}>
              <img src="https://thumbs.dreamstime.com/b/basic-rgb-145958704.jpg" alt="" className=' h-20 w-20' />
              <div className='text-4xl p-4 text-center font-bold from-sky-600 via-green-600 to-purple-600 bg-gradient-to-r bg-clip-text text-transparent'>
                Blogify
              </div>
            </NavLink>
            <div className='flex gap-4 text-3xl font-bold'>
              <NavLink to={`https://twitter.com/shivam_302003`}>
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-black-icon.png" className='h-10 w-10' alt="" />
              </NavLink>
              <NavLink to={'https://www.instagram.com/shivam_302003?igsh=MWp5ZjhqdWVzdmlmYg=='}>
                <img src="https://static-00.iconduck.com/assets.00/instagram-icon-2048x2048-uc6feurl.png" alt="" className='h-10 w-10' />
              </NavLink>
              <NavLink to={`https://www.linkedin.com/in/shivam-jindal-23833624a/`}>
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" className='h-10 w-10' />
              </NavLink>
              <NavLink to={'https://github.com/Shivammjindal'}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" className='h-10 w-10' />
              </NavLink>
              <NavLink to={'https://leetcode.com/u/shivamjindal30/'}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png?f=webp" alt="" className='h-10 w-10' />
              </NavLink>
            </div>
            
            <div className=' text-slate-400 mt-10'>
              Copyright All Rights Reserved 2024
            </div>
          </div>

          <div className=' text-slate-900 font-medium text-[1rem]'>
            <div className='text-slate-600 text-xl'>
              <NavLink to={'https://github.com/Shivammjindal/BlogifyApp'}>
                Give your (Open Source) Contribution
              </NavLink>
              <div className='flex gap-2 mt-3'>
                <NavLink to={`https://react.dev/`}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" className='h-10 w-12' alt="" />
                </NavLink>
                <NavLink to={'https://appwrite.io/'}>
                  <img src="https://seeklogo.com/images/A/appwrite-logo-D33B39992A-seeklogo.com.png" alt="" className='h-10 w-16' />
                </NavLink>
                <NavLink to={`https://vitejs.dev/`}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png" alt="" className='h-10 w-12' />
                </NavLink>
                <NavLink to={'https://redux-toolkit.js.org/'}>
                  <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="" className='h-10 w-10' />
                </NavLink>
                <NavLink to={'https://github.com/Shivammjindal'}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="" className='h-10 w-11' />
              </NavLink>
              </div>
            </div>
            <div className='flex gap-6 mt-10 text-lg text-slate-500'>
              <div>
                <NavLink to="/about">
                  About Us
                </NavLink>
              </div>
              <div>
                <NavLink to="/ContactUs">
                  Contact Us
                </NavLink>
              </div>
              <div>
                <NavLink to="/">
                  Home
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className=' text-slate-900 text-lg mt-1 font-medium text-[1rem]'>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer