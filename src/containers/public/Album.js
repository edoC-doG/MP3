import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as apis from "../../apis"
import * as actions from '../../store/actions'
import moment from 'moment'
import { ListSong, AudioLoading } from '../../components'
import Scrollbars from 'react-custom-scrollbars-2'
import icons from '../../utils/icons'

const { BsFillPlayFill } = icons

const Album = () => {
    const location = useLocation()
    const { pid } = useParams()
    const { isPlaying } = useSelector(state => state.music)
    const [playData, setPlayData] = useState({})
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.setCurListData(pid))
        const fetchPlayListDetail = async () => {
            dispatch(actions.loading(true))
            const res = await apis.apiGetDetailPlayList(pid)
            dispatch(actions.loading(false))
            if (res?.data.err === 0) {
                setPlayData(res.data?.data)
                dispatch(actions.playListSong(res?.data?.data?.song?.items))
            }
        }
        fetchPlayListDetail()
    }, [pid])

    useEffect(() => {
        if (location.state?.playAlbum === true) {
            const randomSongIdx = Math.round(Math.random() * playData?.song?.items?.length) - 1
            dispatch(actions.getMusicCur(playData?.song?.items[randomSongIdx]?.encodeId))
            dispatch(actions.playMusic(true))
        }
    }, [pid, playData])
    return (
        <>
            <div className='w-full h-[90px]'></div>
            <div className='flex gap-8 w-full h-full px-[59px] relative animate-scale-up-center'>
                <div className=' flex-none w-1/4 flex flex-col items-center gap-2 sticky top-0 left-0 '>
                    <div className='w-full shadow-xl rounded-md overflow-hidden'>
                        <div className='relative cursor-pointer hover:scale-110 duration-500'>
                            <img
                                src={playData?.thumbnailM}
                                alt="Hình ảnh bài hát"
                                className='block w-full object-cover  '
                            />
                            <div
                                className='absolute 
                        top-0 left-0 bottom-0 right-0 hover:bg-overlay-30 text-white flex items-center justify-center'
                            >
                                <span className='p-2 border border-white rounded-full'>
                                    {isPlaying ? <AudioLoading /> : <BsFillPlayFill size={30} />}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex-col flex  items-center'>
                        <h3 className='text-[20px] font-bold text-gray-800'>{playData?.title}</h3>
                        <span className='flex gap-2 items-center text-primary-500 text-xs pb-1'>
                            <span>Cập nhật:</span>
                            <p>{moment.unix(playData?.contentLastUpdate).format("DD/MM/YYYY")}</p>
                        </span>
                        <span className='flex items-center text-primary-500 text-xs pb-1'>{playData?.artistsNames}</span>
                        <span className='flex items-center text-primary-500 text-xs'>{`${Math.round(playData?.like / 1000)}K người yêu thích`}</span>
                    </div>
                </div>
                <Scrollbars autoHide style={{ width: '100%', height: '80%' }}>
                    <div className='flex-auto'>
                        <span className='text-sm'>
                            <span className='text-gray-500'>Lời tựa </span>
                            <span>{playData?.sortDescription}</span>
                        </span>
                        <ListSong songList={playData.song?.items} totalDuration={playData.song?.totalDuration} />
                    </div>
                </Scrollbars>
            </div>
        </>
    )
}

export default Album