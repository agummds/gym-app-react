import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import SectionWrapper from './components/SectionWrapper'

function App() {
  
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r
    from-slate-900 to-slate-950 text-white text-sm sm:text-base'>
    <Hero/>      
    <SectionWrapper/>   
    <Generator/>      
    <Workout/>   
    </main>
  )
}

export default App
