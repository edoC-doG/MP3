import React from 'react'
import { Outlet } from 'react-router-dom'
import { Play, SidebarLeft, Header, SidebarRight } from "../../components";


const Public = () => {
  return (
    <div className='w-full h-screen flex flex-col relative bg-primary-100'>
      <div className='w-full h-full flex flex-auto '>
        <div className='w-[240px] h-full flex-none'
        >
          <SidebarLeft />
        </div>
        <div className='flex-auto'
        >
          <div className=' flex items-center h-[70px] px-[59px] w-full mb-5'
          >
            <Header />
          </div>
          <Outlet />
        </div>
        <div className='w-[329px] hidden 1600:flex flex-none animate-slide-left'
        >
          <SidebarRight />
        </div>
      </div>
      <div className='flex-none h-[90px] sticky bottom-0 left-0 right-0'>
        <Play />
      </div>
    </div>
  )
}

export default Public;