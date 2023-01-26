import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
// import HeroImg from '../components/HeroImg'
import HeroImg2 from '../components/HeroImg2'
import Aboutcont from '../components/aboutcont'
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="About Myself" text="The friendly neighbourhood Developer"/>
      <Aboutcont/>
      <Footer/>      
    </div>
  )
}

export default About