import React, { useEffect, useState } from 'react'
import { SectionItem } from '../../components'
import { useSelector } from 'react-redux';
import { apiGetArtist } from '../../apis';
const SearchAlbum = ({ data }) => {
    const { searchData } = useSelector(state => state.music)
    const [playList, setPlayList] = useState([])
    useEffect(() => {
        const fetch = async () => {
            const res = await apiGetArtist(searchData?.top?.alias)
            if (res.data.err === 0) {
                setPlayList((res.data.data.sections || [])[1])
            }
        }
        fetch()
    }, [searchData])
    console.log(playList)
    return (
        <div
            className='w-full flex flex-col gap-8 px-[44px]'
        >
            <h3>PlayList/Album</h3>
            <div
                className='flex items-start justify-start flex-wrap '
            >
                {playList && playList?.items?.length > 0 && playList.items?.map((item) => (
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
    )
}

export default SearchAlbum