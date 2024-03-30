import React from 'react'
import vid from '../../videos/video.mp4'
import vid2 from '../../videos/video2.mp4'

const Image = () => {
  return (
    <div className='w-full flex items-center justify-center overflow-hidden  h-[60vh] sm:py-10 sm:h-[150vh]'>
      <div className='w-[25%] h-[50%] sm:h-[70%]  relative'>
        <div className='absolute overflow-hidden w-32 h-20 sm:w-[20vw] sm:h-[10vw] sm:-left-[70%]  -left-[50%] top-1/3 sm:top-1/4'>
            <video autoPlay muted loop className='w-full h-full scale-[1.2]' src={vid}></video>
        </div>
        <div className='absolute overflow-hidden w-20 h-28 sm:w-[12vw] sm:h-[20vw]  -right-1/3 top-10'>
            <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/550x781/filters:format(webp):quality(70)" alt="" />
        </div>
        <div className='absolute overflow-hidden w-32 h-24 sm:w-[25vw] sm:h-[15vw]  top-[90%] -left-[80%] sm:top-[80%] sm:-left-[80%]'>
            <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/550x369/filters:format(webp):quality(70)" alt="" />
        </div>
        <div className='absolute overflow-hidden w-36 h-36 sm:w-[20vw] sm:h-[20vw] sm:-right-[60%] top-[80%] -right-[90%]'>
            <video autoPlay muted loop className='w-full h-full scale-[1.2]' src={vid2}></video>
        </div>
        <img className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/550x940/filters:format(webp):quality(70)" alt="" />
      </div>
    </div>
  )
}

export default Image
