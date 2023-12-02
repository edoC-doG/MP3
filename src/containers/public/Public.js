import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Play, SidebarLeft, Header, SidebarRight, Loading } from "../../components";
import Scrollbars from 'react-custom-scrollbars-2'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "../../store/actions"


const Public = () => {
  const [isShowSideBarR, setShowSideBarR] = useState(false)
  const { isLoading, scrollTop } = useSelector(state => state.app)
  const dispatch = useDispatch()
  const handleScrollTop = (e) => {
    if (e.target.scrollTop === 0) {
      dispatch(actions.zeroScrollTop(true))
    } else {
      dispatch(actions.zeroScrollTop(false))
    }
  }
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
          <div className={`${scrollTop === "false" ? "bg-transparent" : "bg-primary-100 "} left-[240px] right-0 1600:right-[329px] px-[59px] flex fixed top-0 items-center h-[70px] z-50`}>
            <Header />
          </div>
          <div className='w-full h-[70px]'></div>
          <div className='flex-auto w-full'>
            <Scrollbars
              onScroll={handleScrollTop}
              autoHide
              style={{ width: '100%', height: '100%' }}>
              <Outlet />
              <div className='w-full h-[120px]'></div>
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