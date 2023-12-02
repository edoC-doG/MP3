import React from 'react'
import logo from '../assets/imgs/logo-light.svg'
import { sidebarMenu } from './../utils/menu';
import { NavLink, useNavigate } from 'react-router-dom';
import path from './../utils/path';

const noActiveStyle = "py-2 px-[25px] font-bold text-[#9633c8] text-[13px] flex gap-3 items-center"
const activeStyle = " py-2 px-[25px] font-bold text-[#32323d] text-[13px] flex gap-3 items-center"

const SidebarLeft = () => {
  const navigate = useNavigate()
  return (
    <div className='flex h-full flex-col bg-primary-300'>
      <a href='#!' onClick={() => navigate(path.HOME)} className='w-full h-[70px] min-[1024px]:py-[15px] min-[1024px]:px-[25px] flex justify-start items-center' >
        <img src={logo} alt="" className='w-[120px] h-[40] object-contain min-[1024px]:block hidden' />
        <img
          src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.105/static/media/icon_zing_mp3_60.f6b51045.svg"
          alt="logo"
          className='w-[95px] h-[45px] min-[1024px]:hidden'
        />
      </a>
      <div className='flex flex-col'>
        {sidebarMenu.map(item => (
          <NavLink
            to={item.path}
            key={item.path}
            end={item.end}
            className={({ isActive }) => isActive ? activeStyle : noActiveStyle}
          >
            {item.icons}
            <span className='min-[1024px]:inline hidden'>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default SidebarLeft