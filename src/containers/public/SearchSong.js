import React, { useEffect } from 'react';
import { ListSong, ListSongItem } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';



const SearchSong = () => {
    const dispatch = useDispatch()
    const { searchData } = useSelector(state => state.music);
    useEffect(() => {
        dispatch(actions.getSearchSong(searchData?.top?.playlistId))
    }, [searchData])
    return (
        <div className='w-full px-[60px]'>
            <ListSong isHideTime />
        </div>
    )
}

export default SearchSong