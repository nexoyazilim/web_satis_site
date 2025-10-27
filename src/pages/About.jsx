import React from 'react'
import AboutHeader from '../components/about/AboutHeader'
import AboutMissionVision from '../components/about/AboutMissionVision'
import AboutFeatures from '../components/about/AboutFeatures'
import AboutProcess from '../components/about/AboutProcess'
import AboutValues from '../components/about/AboutValues'

const About = () => {
  return (
    <div>
      <AboutHeader />
      <AboutMissionVision />
      <AboutFeatures />
      <AboutProcess />
      <AboutValues />
    </div>
  )
}

export default About
