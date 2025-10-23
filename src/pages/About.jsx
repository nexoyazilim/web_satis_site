import React from 'react'
import AboutHeader from '../components/about/AboutHeader'
import AboutStats from '../components/about/AboutStats'
import AboutFeatures from '../components/about/AboutFeatures'
import AboutTeam from '../components/about/AboutTeam'

const About = () => {
  return (
    <div className="about-page">
      <AboutHeader />
      <AboutStats />
      <AboutFeatures />
      <AboutTeam />
    </div>
  )
}

export default About
