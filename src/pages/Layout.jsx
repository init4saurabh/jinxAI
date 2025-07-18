import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Layout = () => {

  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false)
  return (
    <div className='flex flex-col items-start justify-start h-screen'>
       <nav>
        <img src={assets.logo} alt="" onClick={()=>navigate('/')} />
        
        
       </nav>
        <Outlet/>
    </div>
  )
}

export default Layout