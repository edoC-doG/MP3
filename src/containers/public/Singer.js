import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import * as apis from './../../apis';
import icons from "../../utils/icons"
import { Artist, ItemSong, Section } from "../../components"

const { AiOutlineUserAdd, BsFillPlayFill } = icons

const Singer = () => {
    const { singer } = useParams()
    const [artistData, setArtitsData] = useState(null)
    const [isHover, setHover] = useState(false)
    const ref = useRef()
    useEffect(() => {
        const fetchArtitsData = async () => {
            const res = await apis.apiGetArtist(singer)
            if (res.data.err === 0) {
                setArtitsData(res.data.data)
            }
        }
        singer && fetchArtitsData()
    }, [singer])

    useEffect(() => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }, [singer])

    return (
        <div className='flex flex-col w-full'>
            <div ref={ref} className='relative'>
                <img src={artistData?.cover} alt="background" className='h-[400px] object-cover w-full' />
                <div className='absolute right-0 left-0 top-0 bottom-0 bg-gradient-to-t from-[rgba(0,0,0,0.55)] to-transparent px-[60px] text-white'>
                    <div className='absolute bottom-0 p-6'>
                        <div className='flex gap-8 items-center'>
                            <h1 className='text-[60px] font-bold'>{artistData?.name}</h1>
                            <span
                                className='p-2 relative rounded-full text-hover-600 hover:bg-transparent hover:text-gray-100 cursor-pointer bg-white'
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                <div className='w-8 h-8'></div>
                                {isHover && <span className='absolute bg-hover-600 top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] rounded-full animate-scale-up-center'></span>}
                                <span className='absolute p-2 top-0 left-0 bottom-0 right-0 z-30'><BsFillPlayFill size={32} /></span>
                            </span>
                        </div>
                        <div className='flex items-center gap-4 mt-4'>
                            <span className='text-sm text-gray-300'>
                                {`${Number(artistData?.totalFollow.toFixed(1)).toLocaleString()} người quan tâm`}
                            </span>
                            <button
                                type="button"
                                className='bg-hover-600 mt-3 px-4 py-2 text-sm rounded-l-full rounded-r-full flex items-center justify-center gap-1'
                            >
                                <span><AiOutlineUserAdd /></span>
                                <span className='text-sm opacity-70'>QUAN TÂM</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[30px] px-[60px] w-full flex-auto '>
                <div className='flex items-center justify-between'>
                    <h3 className='mb-5 font-bold text-[20px]'>Bài hát nổi bật</h3>
                    <span className='text-xs'>TẤT CẢ</span>
                </div>
                <div className='flex flex-wrap w-full justify-between'>
                    {artistData?.sections?.find(item => item.sectionType === "song")?.items?.filter((item, index) => index < 6)?.map(item => (
                        <div className={`w-[90%] min-[1024px]:w-[49%] border-b border-primary-300`} key={item.encodeId}>
                            <ItemSong
                                thumbnail={item.thumbnail}
                                title={item.title}
                                artists={item.artistsNames}
                                sid={item.encodeId}
                                size="w-[40px] h-[40px]"
                                hideTime
                            />
                        </div>
                    ))}
                </div>
            </div>
            {artistData?.sections?.filter(item => item.sectionType === "playlist")?.map((item, idx) => (
                <Section key={idx} data={item} />
            ))}
            <div className='flex flex-col w-full px-[60px] mt-12'>
                <h3 className='text-lg font-bold mb-5'>{artistData?.sections?.find(item => item.sectionType === "artist")?.title}</h3>
                <div className='flex gap-[28px] w-full '>
                    {artistData?.sections?.find(item => item.sectionType === "artist")?.items?.filter((item, index) => index <= 4).map(item => (
                        <Artist
                            key={item.id}
                            title={item.name}
                            image={item.thumbnailM}
                            follwer={item.totalFollow}
                            link={item.link}
                        />
                    ))}
                </div>
            </div>
            <div className='px-[60px] mt-12'>
                <h3 className='text-lg font-bold mb-5'>{`Về ${artistData?.name}`}</h3>
                <div className='flex gap-8'>
                    <img src={artistData?.cover} alt="avatar" className='w-[45%] flex-none h-[275px] object-cover rounded-md' />
                    <div className='flex flex-col gap-8 text-sm'>
                        <p dangerouslySetInnerHTML={{ __html: artistData?.biography }}></p>
                        <div className='flex flex-col gap-2'>
                            <span className='text-[20px] font-bold'>{Number(artistData?.follow?.toFixed(1)).toLocaleString()}</span>
                            <span>Người quan tâm</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[100px]'></div>
        </div>
    )
}

export default Singer