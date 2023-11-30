import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArrSlider } from '../utils/fn'
import * as actions from '../store/actions'
import { useNavigate } from 'react-router-dom'


const Sliders = () => {
  const { banner } = useSelector(state => state.app)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //animation
  useEffect(() => {
    const sliderEls = document.getElementsByClassName("slider-item");
    let min = 0;
    let max = 2;
    const intervalId = setInterval(() => {
      const list = getArrSlider(min, max, sliderEls.length - 1);
      for (let i = 0; i < sliderEls.length; i++) {
        //DELETE 
        sliderEls[i]?.classList?.remove("animate-slide-right", "order-last", "z-20")
        sliderEls[i]?.classList?.remove("animate-slide-left", "order-first", "z-10")
        sliderEls[i]?.classList?.remove("animate-slide-left-2", "order-2", "z-10")

        // HIDE
        list.some(item => item === i)
          ? sliderEls[i].style.cssText = `display: block`
          : sliderEls[i].style.cssText = `display: none`

      }
      // ADD ANIMATION BY ADDING CLASS
      list.forEach(item => {
        if (item === max) {
          sliderEls[item]?.classList?.add("animate-slide-right", "order-last", "z-20")
        } else if (item === min) {
          sliderEls[item]?.classList?.add("animate-slide-left", "order-first", "z-10")
        } else {
          sliderEls[item]?.classList?.add("animate-slide-left-2", "order-2", "z-10")
        }
      })
      min = (min === sliderEls.length - 1) ? 0 : min + 1;
      max = (max === sliderEls.length - 1) ? 0 : max + 1;
    }, 3000)
    return () => {
      intervalId && clearInterval(intervalId)
    }
  }, [])

  const handleClickBanner = (item) => {
    if (item?.type === 1) {
      dispatch(actions.getMusicCur(item.encodeId))
      dispatch(actions.playMusic(true))
      dispatch(actions.playListSong(null))
    } else if (item?.type === 4) {
      dispatch(actions.playAlbum(true))
      const albumPath = item?.link?.split('.')[0];
      navigate(albumPath)
    } else {
      dispatch(actions.playListSong(null))
    }
  }

  return (
    <div className='w-full overflow-hidden px-[59px] mt-[40px]'>
      <div className='flex gap-8 pt-8'>
        {banner?.map((item, index) => (
          <img
            src={item.banner}
            key={item.encodeId}
            onClick={() => handleClickBanner(item)}
            className={`slider-item flex-1 object-contain w-[30%] rounded-lg ${index <= 2 ? "block" : "hidden"}`}
            alt="Song" />
        ))}
      </div>
    </div>
  )
}

export default Sliders