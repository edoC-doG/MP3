import React from 'react'
import logo from '../assets/imgs/logo-light.svg'
import { sidebarMenu } from './../utils/menu';
import { NavLink } from 'react-router-dom'


const noActiveStyle = "py-2 px-[25px] font-bold text-[#9633c8] text-[13px] flex gap-3 items-center"
const activeStyle = " py-2 px-[25px] font-bold text-[#32323d] text-[13px] flex gap-3 items-center"

const SidebarLeft = () => {
  return (
    <div className='flex h-full flex-col bg-primary-300'>
      <a href="#!" className='w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center' >
        <img src={logo} alt="" className='w-[120px] h-[40] object-contain' />
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
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default SidebarLeft