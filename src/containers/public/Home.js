import React, { useEffect } from 'react';
import { Section, Slider, NewRelease, ChartSection } from '../../components';
import { useSelector } from 'react-redux';
import WeekRank from './WeekRank';
import { Link } from 'react-router-dom';


const Home = () => {
  const { chill, loveLife, remix, mood, artistsTrending, top100, albumHot, weekChart } = useSelector(state => state.app)
  return (
    <div className='overflow-y-auto w-full'>
      <Slider />
      <NewRelease />
      <Section data={chill} />
      <Section data={loveLife} />
      <Section data={remix} />
      <Section data={mood} />
      <Section data={artistsTrending} />
      <ChartSection />
      <div className='flex items-center px-[43px] w-full mt-8'>
        {weekChart?.map(item => (
          <Link to={item?.link?.split('.')[0]} key={item.link} className='flex-1 px-4'>
            <img src={item.cover} alt="cover" className='w-full object-cover rounded-md' />
          </Link>
        ))}
      </div>
      <Section data={top100} />
      <Section data={albumHot} />
      <div className='w-full h-[500px]'>

      </div>
    </div>
  )
}

export default Home