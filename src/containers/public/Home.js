import React, { useEffect } from 'react';
import { Section, Slider, NewRelease, ChartSection, Artist } from '../../components';
import { useSelector } from 'react-redux';
import WeekRank from './WeekRank';
import { Link } from 'react-router-dom';
import Sliders from 'react-slick';

const Home = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7
  };
  const { chill, loveLife, remix, mood, artistsTrending, top100, albumHot, weekChart, singers } = useSelector(state => state.app)
  return (
    <div className='overflow-y-auto w-full'>
      <Slider />
      <NewRelease />
      {chill && <Section data={chill} />}
      {loveLife && <Section data={loveLife} />}
      {remix && <Section data={remix} />}
      {mood && <Section data={mood} />}
      {artistsTrending && <Section data={artistsTrending} />}
      <ChartSection />
      {singers && <div className='flex items-center px-[43px] w-full mt-12'>
        <Sliders {...settings}>
          {singers?.map(item => (
            <div
              key={item.id}
              className='px-4'
            >
              <Artist
                image={item.thumbnail}
                follwer={item.totalFollow}
                link={item.link}
              />
            </div>
          ))}
        </Sliders>
      </div>}
      <div className='flex items-center px-[43px] w-full mt-8'>
        {weekChart?.map(item => (
          <Link to={item?.link?.split('.')[0]} key={item.link} className='flex-1 px-4'>
            <img src={item.cover} alt="cover" className='w-full object-cover rounded-md' />
          </Link>
        ))}
      </div>
      {top100 && <Section data={top100} />}
      {albumHot && <Section data={albumHot} />}
      <div className='w-full h-[500px]'>

      </div>
    </div>
  )
}

export default Home