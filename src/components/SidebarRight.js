import React, { useEffect, useState } from 'react'
import icons from '../utils/icons'
import { useSelector } from 'react-redux';
import ItemSong from './ItemSong';
import { apiGetDetailPlayList } from '../apis'
import { Scrollbars } from 'react-custom-scrollbars-2';

const { ImBin } = icons

const SidebarRight = () => {
    const [isRecent, setIsRecent] = useState(false)
    const { curSongId, curSongData, curPlayList, isPlaying, recentSongs } = useSelector(state => state.music)
    const [playList, setPlaylist] = useState()
    const fetchDetailPlaylist = async () => {
        const res = await apiGetDetailPlayList(curPlayList)
        if (res.data?.err === 0) setPlaylist(res.data.data?.song?.items)
    }

    useEffect(() => {
        curPlayList && fetchDetailPlaylist()
    })

    useEffect(() => {
        if (curPlayList && isPlaying) fetchDetailPlaylist()
    }, [curPlayList, isPlaying])

    useEffect(() => {
        isPlaying && setIsRecent(false)
    }, [isPlaying, curSongId])

    return (
        <div className='flex flex-col text-xs w-full h-full'>
            <div className='h-[70px] w-full flex-none py-[14px] px-2 gap-8 flex justify-between items-center'>
                <div className='flex flex-auto justify-center bg-primary-200 rounded-l-full rounded-r-full py-[6px] px-[6px] cursor-pointer'>
                    <span className={`py-[5px] ${!isRecent && 'bg-white'} flex-1 flex justify-center rounded-r-full rounded-l-full items-center`}
                        onClick={() => setIsRecent(prev => !prev)}
                    >
                        Danh Sách Phát
                    </span>
                    <span className={`py-[5px] ${isRecent && 'bg-white'} flex-1 flex justify-center rounded-r-full rounded-l-full items-center`}
                        onClick={() => setIsRecent(prev => !prev)}
                    >
                        Nghe Gần Đây
                    </span>
                </div>
                <span className='p-2 rounded-full cursor-pointer hover:bg-primary-100'><ImBin size={14} /></span>
            </div>
            {isRecent
                ? <div className='w-full flex-col flex-auto flex p-2'>
                    <Scrollbars autoHide style={{ width: '100%', height: '100%' }}>
                        {recentSongs && <div className='flex flex-col'>
                            {recentSongs?.map(item => (
                                <ItemSong
                                    key={item.encodeId}
                                    thumbnail={item?.thumbnail}
                                    title={item?.title}
                                    artists={item?.artists}
                                    sid={item?.encodeId}
                                />
                            ))}
                        </div>}
                    </Scrollbars>
                </div>
                : <div className='w-full flex flex-auto flex-col'>
                    <div className='flex-none'>
                        <ItemSong
                            key={curSongData.encodeId}
                            thumbnail={curSongData?.thumbnail}
                            title={curSongData?.title}
                            artists={curSongData?.artistsNames}
                            sid={curSongData?.encodeId}
                            size='w-[40px] h-[40px]'
                            style='bg-hover-600 text-white'
                        />
                    </div>
                    <div className='flex flex-col text-black pt-[15px] pb-[5px] px-2'>
                        <span className='text-sm font-bold'>Tiếp theo</span>
                        <span className='opacity-70 text-xs flex gap-1'>
                            <span>Từ playlists</span>
                            <span className='font-semibold text-hover-600'>
                                {curSongData?.album?.title.length > 30 ? `${curSongData?.album?.title.slice(0, 30)}...` : curSongData?.album?.title}
                            </span>
                        </span>
                    </div>
                    {playList && <div className='flex flex-auto flex-col'>
                        <Scrollbars autoHide style={{ width: '100%', height: '100%' }}>
                            {playList?.map(item => (
                                <ItemSong
                                    key={item.encodeId}
                                    thumbnail={item?.thumbnail}
                                    title={item?.title}
                                    artists={item?.artistsNames}
                                    sid={item?.encodeId}
                                    size='w-[40px] h-[40px]'
                                />
                            ))}
                        </Scrollbars>
                    </div>}
                </div>}
            <div className='w-full h-[90px]'>

            </div>
        </div>
    )
}

export default SidebarRight