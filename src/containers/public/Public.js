import React from 'react'
import { Outlet } from 'react-router-dom'
import { Play, SidebarLeft, SidebarRight } from "../../components";


const Public = () => {
  return (
    <div className='w-full min-h-screen flex flex-col relative bg-primary-100'>
      <div className='w-full h-full flex flex-auto'>
        <div className='w-[240px] min-h-screen flex-none'
        >
          <SidebarLeft />
        </div>
        <div className='flex-auto '
        >
          <Outlet />
        </div>
        <div className='w-[329px] min-h-screen flex-none border border-red-500'
        >
          <SidebarRight />
        </div>
      </div>
      <div className='flex-none h-[90px] fixed bottom-0 left-0 right-0'>
        <Play />
      </div>
    </div>
  )
}

export default Public;