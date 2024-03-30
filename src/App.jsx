import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
import Reel from './components/Reel'
import Image from './components/Image'
import Spread from './components/Spread'
import Story from './components/Story'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  

const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className='w-full h-[150vh] sm:h-[250vh] bg-black'>
      <Navbar/>
      <Landing/>
      <Work/>
      <Reel/>
      <Image/>
      <Spread/>
      <Story/>
    </div>
  )
}

export default App
