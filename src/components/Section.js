import React, { memo } from 'react'
import { SectionItem } from './'

const Section = ({ data }) => {
    return (
        <div
            className='mt-12 px-[59px] flex flex-col gap-5 '
        >
            <div className='flex items-center justify-between'>
                <h3 className='text-[20px] font-bold '>{data?.title}</h3>
                <span className='text-xs'>TẤT CẢ</span>
            </div>
            <div
                className='flex items-start justify-between gap-[28px] '
            >
                {data && data?.items?.length > 0 && data.items.filter((item, idx) => idx <= 4)?.map((item) => (
                    <SectionItem
                        key={item.encodeId}
                        data={data}
                        artistsNames={item.artistsNames}
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

export default memo(Section)