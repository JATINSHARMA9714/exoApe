import React from 'react'

const Spread = () => {
  return (
    <div className='w-full h-[50vh] sm:h-screen py-8 sm:py-0'>
      <div className='flex items-center sm:py-2 justify-center gap-2'>
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
          <h3>In the media</h3>
      </div>
      <div className=' flex flex-col  items-center justify-center'>
        <h1 className='text-6xl sm:text-[10rem] sm:tracking-tighter'>Spread</h1>
        <h1 className='text-6xl sm:text-[10rem] sm:tracking-tighter'>the News</h1>
        <p className='text-[1.1rem] sm:text-[1.5rem] sm:mt-8 sm:px-[32vw] sm:leading-8 text-zinc-600 leading-5 px-12 text-center py-2'>Find out more about our work on these leading design and technology platforms.</p>
        <a className='border-b-[2px] mt-10 inline-block border-zinc-300' href="#">Browse all news</a>
      </div>
    </div>
  )
}

export default Spread
