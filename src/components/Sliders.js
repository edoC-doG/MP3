import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArrSlider } from '../utils/fn'
import * as actions from '../store/actions'
import { useNavigate } from 'react-router-dom'
import { Button } from "./"
import icons from '../utils/icons'

const { MdArrowBackIosNew, MdArrowForwardIos } = icons
var intervalId

const Sliders = () => {
  const { banner } = useSelector(state => state.app)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isAuto, setAuto] = useState(true)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(2)

  //animation
  useEffect(() => {
    if (isAuto) {
      intervalId = setInterval(() => {
        handleAnimation(1)
      }, 3000)
    }
    return () => {
      intervalId && clearInterval(intervalId)
    }
  }, [min, max, isAuto])

  const handleClickBanner = (item) => {
    if (item?.type === 1) {
      dispatch(actions.getMusicCur(item.encodeId))
      dispatch(actions.playMusic(true))
      dispatch(actions.playListSong(null))
    } else if (item?.type === 4) {
      dispatch(actions.playAlbum(true))
      const albumPath = (item?.link?.split('.')[0] || []);
      navigate(albumPath)
    } else {
      dispatch(actions.playListSong(null))
    }
  }

  const handleAnimation = (step) => {
    const sliderEls = document.getElementsByClassName("slider-item");
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
    if (step === 1) {
      setMin(prev => prev === sliderEls.length - 1 ? 0 : prev + step)
      setMax(prev => prev === sliderEls.length - 1 ? 0 : prev + step)
    }
    if (step === -1) {
      setMin(prev => prev === sliderEls.length - 1 ? 0 : prev + step)
      setMax(prev => prev === sliderEls.length - 1 ? 0 : prev + step)
    }
  }

  const handleBack = useCallback((step) => {
    intervalId && clearInterval(intervalId)
    setAuto(false)
    handleAnimation(step)
  }, [min, max])
  return (
    <div className='w-full overflow-hidden px-[59px] mt-[-20px] relative'>
      <Button
        handleOnClick={() => handleBack(1)}
        text={<MdArrowBackIosNew size={30} />}
        style="absolute top-1/2 left-[70px] z-50 p-2 rounded-full bg-[rgba(255,255,255,0.6)] text-white"
      />
      <Button
        handleOnClick={() => handleBack(-1)}
        text={<MdArrowForwardIos size={30} />}
        style="absolute top-1/2 right-[70px] z-50 p-2 rounded-full bg-[rgba(255,255,255,0.6)] text-white"
      />
      <div
        className='flex gap-8 pt-8'
        onMouseLeave={() => setAuto(true)}
      >
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