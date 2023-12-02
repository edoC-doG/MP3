import React from 'react'
import { useSelector } from 'react-redux';
import * as util from "../../utils/fn"
import { Artist, ItemSong, ListSongItem, SectionItem } from "../../components"

const SearchAll = () => {

    const { searchData } = useSelector(state => state.music)
    const artistFl = (searchData?.artists[0] || [])?.totalFollow
    return (
        <div className='w-full flex flex-col px-[60px] gap-[60px]'>
            <div className='flex flex-col'>
                <h3 className='text-lg font-bold mb-5'>Nổi bật</h3>
                <div className='flex gap-8'>
                    {searchData?.top && <div className='p-[10px] flex-1 bg-primary-200 rounded-md flex gap-8 items-center cursor-pointer'>
                        <img
                            src={searchData?.top?.thumbnail}
                            alt="avatar"
                            className={`w-[84px] h-[84px] object-cover ${searchData.top.objectType === "artist" && "rounded-full"} `}
                        />
                        <div className='flex flex-col text-xs'>
                            <span className='mb-[6px]'>{searchData.top.objectType === "artist" ? "Nghệ sĩ" : "Bài hát"}</span>
                            <span className='text-sm font-semibold'>{searchData.top.title || searchData.top.name}</span>
                            {searchData.top.objectType === "artist" && <span>{util.handleNumber(artistFl) + "quan tâm"}</span>}
                        </div>
                    </div>
                    }
                    {searchData?.songs?.filter((item, index) => [...Array(2).keys()].some(i => i === index))?.map(item => (
                        <div key={item?.encodeId} className='flex-1'>
                            <ItemSong
                                thumbnail={item?.thumbnail}
                                sid={item?.sid}
                                title={item?.title}
                                artists={item?.artistsNames}
                                size='w-[84px] h-[84px]'
                                style='bg-primary-200'
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex-col flex'>
                <h3 className='text-lg font-bold mb-5'>
                    Bài hát
                </h3>
                <div className='flex justify-between flex-wrap w-full'>
                    {searchData?.songs?.map((item, index) => (
                        <div key={index} className={`flex-auto w-[45%] ${index % 2 !== 0 ? "pl-4" : "pr-4"}  `}>
                            <ListSongItem
                                songData={item}
                                isHideAlbum
                                isHideNode
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex-col flex w-full'>
                <h3 className='text-lg font-bold mb-5'>
                    PlayList/Album
                </h3>
                <div className='flex items-start justify-between gap-[28px]'>
                    {searchData?.playlists?.filter((item, index) => index <= 4)?.map(item => (
                        <SectionItem
                            key={item.encodeId}
                            link={item.link}
                            sortDescription={item.sortDescription}
                            thumbnailM={item.thumbnailM}
                            title={item.title}
                        />
                    ))}
                </div>
            </div>
            <div className='flex-col flex w-full'>
                <h3 className='text-lg font-bold mb-5'>
                    Nghệ sĩ
                </h3>
                <div className='flex gap-[28px]'>
                    {searchData?.artists?.filter((item, index) => index <= 4)?.map(item => (
                        <Artist
                            key={item.id}
                            image={item.thumbnailM}
                            follwer={item.totalFollow}
                            title={item.name}
                            link={item.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchAll