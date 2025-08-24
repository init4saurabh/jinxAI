import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Menu, X } from 'lucide-react';
import Sidebar from '../components/Sidebar';  // ← make sure this path is correct
import { SignIn, useUser } from '@clerk/clerk-react';

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const {user} = useUser()

  return user ? (
    
    <div className="flex flex-col items-start justify-start h-screen">
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200">
        <img
          src={assets.logo}
          alt="Logo"
          onClick={() => navigate('/')}
          className="cursor-pointer w-32 sm:w-44"
        />

        {sidebar
          ? <X
              onClick={() => setSidebar(false)}
              className="w-6 h-6 text-gray-600 sm:hidden"
            />
          : <Menu
              onClick={() => setSidebar(true)}      // ← open it
              className="w-6 h-6 text-gray-600 sm:hidden"
            />
        }
      </nav>

      <div className="flex-1 w-full h-[calc(100vh-64px)] flex">
        {/* Capital-S Sidebar */}
        <Sidebar
          sidebar={sidebar}
          setSidebar={setSidebar}
        />

        <div className="flex-1 bg-[#F4F7FB] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  ) :(
    <div className='flex items-center justify-center h-screen'>
      <SignIn />
    </div>
  )
}

export default Layout;
