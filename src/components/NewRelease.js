import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ItemSong } from "../components";

const NewRelease = () => {

    const { newRelease } = useSelector(state => state.app)
    const [isActive, setActive] = useState("")
    const [playList, setPlayList] = useState([])

    useEffect(() => {
        isActive === "all" ? setPlayList(newRelease?.items?.all) : isActive === "vPop" ? setPlayList(newRelease?.items?.vPop) : setPlayList(newRelease?.items?.others)
    }, [isActive, newRelease])
    return (
        <div className='mt-12 px-[59px] flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <h3 className='text-[20px] font-bold '>{newRelease?.title}</h3>
                <span className='text-xs'>TẤT CẢ</span>
            </div>
            <div className='flex items-center gap-5 text-xs'>
                <button
                    type="button"
                    onClick={() => setActive("all")}
                    className={`py-1 px-4 rounded-r-full rounded-l-full bg-transparent border border-gray-400 ${isActive === "all" && 'bg-hover-600 text-white'}`}
                >
                    TẤT CẢ
                </button>
                <button
                    type="button"
                    onClick={() => setActive("vPop")}
                    className={`py-1 px-4 rounded-r-full rounded-l-full bg-transparent border border-gray-400 ${isActive === "vPop" && 'bg-hover-600 text-white'}`}
                >
                    VIỆT NAM
                </button>
                <button
                    type="button"
                    onClick={() => setActive("others")}
                    className={`py-1 px-4 rounded-r-full rounded-l-full bg-transparent border border-gray-400 ${isActive === "others" && 'bg-hover-600  text-white'}`}
                >
                    QUỐC TẾ
                </button>
            </div>
            <div className='flex flex-wrap w-full'>
                {playList?.map((item) => (
                    <ItemSong
                        key={item.encodeId}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        artists={item.artistsNames}
                        releaseDate={item.releaseDate}
                    />
                ))}
            </div>
        </div>
    )
}

export default NewRelease