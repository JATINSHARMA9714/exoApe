import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap/all'
import React, { useEffect, useRef } from 'react'

const Reel = () => {
  const playreel = useRef(null)
  const videodiv = useRef(null)
  const videocontainer = useRef(null)

  useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(videodiv.current,{
    scale:4,
    scrollTrigger:{
      trigger:videocontainer.current,
      top:"0 0",
      pin:true,
      scrub:1
    }
  })   
  })
  return (
    <div ref={videocontainer} className='w-full h-screen relative flex items-center justify-center overflow-hidden text-white sm:text-zinc-200 bg-[#0D0E13]'>
      <div  className='picture h-32 w-52 sm:h-[15vw] sm:w-[30vw] '>
        <video ref={videodiv} autoPlay muted loop className='w-full h-full scale-[1.1]' src="https://download-video.akamaized.net/v3-1/playback/334619e0-f92f-4627-ba88-dfe521b4e062/9e976370?__token__=st=1711806669~exp=1711821069~acl=%2Fv3-1%2Fplayback%2F334619e0-f92f-4627-ba88-dfe521b4e062%2F9e976370%2A~hmac=71d7994003b2a050def11605a8c8d1311fd6f808a80560d3690bc9ab71395b11&r=dXMtY2VudHJhbDE%3D"></video>
      </div>
      <div className='overlay absolute z-10 w-full h-full '>
        <div className='first flex sm:pt-8  items-center gap-1 justify-center text-sm w-full h-[10vh]'>
        <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h3>Work in motion</h3>
        </div>
        <h1 ref={playreel} className='flex text-6xl gap-28 sm:gap-[30vw] sm:text-[8rem] w-full h-[80vh] items-center justify-center'>
            <div className='font-light'>Play</div>
            <div className='font-light'>Reel</div>
        </h1>
        <p className='w-full h-[10vh] sm:px-[38vw] sm:text-wrap  text-center text-sm px-10'>Our work is best experienced in motion. Don't forget to put on your headphones.</p>
      </div>
    </div>
  )
}

export default Reel
