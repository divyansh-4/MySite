import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
import Prices from '../components/Prices'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS" text="Here are some of the projects I have worked on"/>
      <Prices/>
      <Footer/>
    </div>
  )
}

export default Project