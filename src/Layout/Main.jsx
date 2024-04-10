import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import './Main.scss'
import Intro from '../component/Intro/Intro'
import Skills from '../component/Skills/Skills'

const Main = () => {
  return (
    <div>
    <Navbar/>
    <Intro/>
    <Skills/>
    </div>
  )
}

export default Main