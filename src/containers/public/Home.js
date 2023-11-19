import React, { useEffect } from 'react';
import { Section, Slider, NewRelease } from '../../components';
import { useSelector } from 'react-redux';


const Home = () => {
  const { chill, loveLife, remix, mood, artistsTrending, top100, albumHot } = useSelector(state => state.app)
  return (
    <div className='overflow-y-auto w-full'>
      <Slider />
      <NewRelease />
      <Section data={chill} />
      <Section data={loveLife} />
      <Section data={remix} />
      <Section data={mood} />
      <Section data={artistsTrending} />
      <Section data={top100} />
      <Section data={albumHot} />
      <div className='w-full h-[500px]'>

      </div>
    </div>
  )
}

export default Home