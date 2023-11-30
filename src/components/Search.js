import React, { useState } from 'react';
import icons from './../utils/icons';
import * as actions from '../store/actions';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import path from './../utils/path';
import { TfiClose } from 'react-icons/tfi';

const { TfiSearch } = icons

const Search = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { singer } = useParams()
    const [keyword, setKeyword] = useState('');

    const handleSearch = async (e) => {
        if (e.keyCode === 13) {
            dispatch(actions.search(keyword))
            navigate({
                pathname: `/${path.SEARCH}/${path.ALL}`,
                search: createSearchParams({
                    q: keyword,
                }).toString()
            })
        }
    }

    return (
        <div className='w-full flex items-center relative '>
            <span
                className={`absolute right-4 cursor-pointer opacity-70 ${singer ? 'text-gray-200' : ''}`}
                onClick={() => setKeyword("")}
            >
                <TfiClose />
            </span>
            <span className={`h-10 pl-4 ${singer ? 'bg-[rgba(0,0,0,0.2)] text-gray-200' : 'bg-[#F2F2F2]'} rounded-l-[999px] flex items-center justify-center text-gray-500`}
            >
                <TfiSearch />
            </span>
            <input
                type='text'
                className={`outline-none ${singer ? 'bg-[rgba(0,0,0,0.2)] placeholder:text-gray-200' : 'bg-[#F2F2F2]'} px-4 py-2 rounded-r-[999px] w-full h-10 text-gray-500`}
                placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát,...'
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyUp={handleSearch}
            />
        </div>
    )
}

export default Search