import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { searchMenu } from '../../utils/menu';
import { useSelector } from 'react-redux';

const Search = () => {
    const { keyword } = useSelector(state => state.music)
    console.log(keyword)
    const notActiveStyle = 'px-4 hover:text-hover-600  font-semibold cursor-pointer';
    const activeStyle = 'px-4 hover:text-hover-600 font-semibold cursor-pointer border-b-2 border-hover-600 text-hover-600 h-[52px] flex items-center';
    return (
        <div className='w-full'>
            <div className='flex h-[50px] mb-7  items-center text-sm border-b border-gray-400 pl-[60px] pb-1'>
                <span className='text-[24px] font-bold pr-6 border-r border-gray-400 '>Kết quả tìm kiếm</span>
                <div className='flex items-center'>
                    {searchMenu.map(item => (
                        <NavLink
                            key={item.path}
                            to={`${item.path}?q=${keyword.replace(' ', '+')}`}
                            className={({ isActive }) => isActive ? activeStyle : notActiveStyle}
                        >
                            {item.text}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className='w-full'>
                <Outlet />
            </div>
            <div className='w-full h-[150px]'>
            </div>
        </div>
    )
}

export default Search