import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarLeft, SidebarRight } from "../../components";


const Public = () => {
  return (
    <div className='w-full flex '>
      <div className='w-[240px] flex-none'
      >
        <SidebarLeft />
      </div>
      <div className='flex-auto border border-green-500'
      >
          <Outlet />
      </div>
      <div className='w-[329px] flex-none border border-red-500'
      >
        <SidebarRight />
      </div>
    </div>
  )
}

export default Public;