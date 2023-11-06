import React from 'react'
import icons from './../utils/icons';

const { TfiSearch } = icons

const Search = () => {
    return (
        <div className='w-full flex items-center'>
            <span className='h-10 pl-4 bg-[#F2F2F2] rounded-l-[999px] flex items-center justify-center text-gray-500'
            >
                <TfiSearch />
            </span>
            <input
                type='text'
                className='outline-none bg-[#F2F2F2] px-4 py-2 rounded-r-[999px] w-full h-10 text-gray-500'
                placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát,...'
            />
        </div>
    )
}

export default Search