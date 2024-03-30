import { easeIn, easeInOut, motion } from 'framer-motion'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap/all'
import React, { useEffect, useRef } from 'react'

const Landing = () => {

  const digital=useRef(null)
  const design=useRef(null)
  const expi=useRef(null)

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(digital.current, {
      y:"100%",
      opacity:0,
      scrollTrigger:{
        trigger:digital.current,
        start:"top 90%",
        end:"top 40%",
        scrub:1
      }
    })
    gsap.from(design.current, {
      y:"100%",
      opacity:0,
      scrollTrigger:{
        trigger:design.current,
        start:"top 90%",
        end:"top 40%",
        scrub:1
      }
    })
    gsap.from(expi.current, {
      y:"100%",
      opacity:0,
      scrollTrigger:{
        trigger:expi.current,
        start:"top 90%",
        end:"top 40%",
        scrub:1
      }
    })

  },[])


  return (
    <div className='relative w-full h-full overflow-hidden text-white'>
    <div data-scroll data-scroll-speed="-1"  className='w-full h-full'>
        <motion.img initial={{y:"80%"}} animate={{y:0}} transition={{ease:[0.45, 0, 0.55, 1],duration:1.2}} className='w-full origin-top-left h-full object-cover' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(jpeg):quality(70)" alt="" />
    </div>
    <div className='absolute top-0 text p-10 sm:p-32'>
    <div className='first mt-[140%] sm:mt-72'>
      {["Global digital design studio partnering","with brands and businesses that create","exceptional experiences where people","live, work, and unwind."].map((item,index)=>{
        return <p className='text-[4.5vw] overflow-hidden sm:text-2xl font-semibold'> <motion.span className="inline-block origin-left" initial={{rotate:30,y:"100%"}} animate={{rotate:0,y:0}} transition={{duration:.4,delay:index*0.2}}>{item} </motion.span></p>
      })}
    </div>
    <div className='headings text-6xl sm:text-[13.5vw] mt-10 sm:mt-20 relative sm:-left-3 font-semibold tracking-tight sm:tracking-wide '>
        <h1 className='overflow-hidden py-5'><span ref={digital} className='inline-block '>Digital</span></h1>
        <h1 className='overflow-hidden'><span ref={design} className='inline-block '>Design</span></h1>
        <h1 className='overflow-hidden'><span ref={expi} className='inline-block '>Experience</span></h1>
    </div>
    <div className='second mt-14 sm:mt-32'>
        <p className='text-[4.5vw] sm:text-xl sm:w-1/2 font-semibold'>We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgettable journeys start with a click.</p>

        <a className='mt-6 sm:mt-40 text-lg font-semibold border-b-[1px] inline-block border-zinc-200 '>The Studio</a>
    </div>
    </div>
    </div>
  )
}

export default Landing
