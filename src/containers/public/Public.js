import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Play, SidebarLeft, Header, SidebarRight, Loading } from "../../components";
import Scrollbars from 'react-custom-scrollbars-2'
import { useSelector } from 'react-redux';

const Public = () => {
  const [isShowSideBarR, setShowSideBarR] = useState(false)
  const { isLoading } = useSelector(state => state.app)
  return (
    <div className='w-full h-screen flex flex-col relative bg-primary-100'>
      <div className='w-full h-full flex flex-auto '>
        <div className='w-[240px] h-full flex-none'>
          <SidebarLeft />
        </div>
        <div className='relative flex-auto flex flex-col'>
          {isLoading && <div className='absolute flex justify-center items-center top-0 bottom-0 left-0 right-0 z-30 bg-primary-100'>
            <Loading />
          </div>}
          <div className=' flex flex-none items-center h-[70px] px-[59px] w-full'>
            <Header />
          </div>
          <div className='flex-auto w-full'>
            <Scrollbars autoHide style={{ width: '100%', height: '100%' }}>
              <Outlet />
            </Scrollbars>
          </div>
        </div>
        {isShowSideBarR === true && <div className='w-[329px] h-screen hidden 1600:flex flex-none animate-slide-left'>
          <SidebarRight />
        </div>}
      </div>
      <div className='z-50 h-[90px] fixed bottom-0 left-0 right-0'>
        <Play setShowSideBarR={setShowSideBarR} />
      </div>
    </div>
  )
}

export default Public;