import React from 'react'
import HeroSection from '../components/home/HeroSection'
import DemoSlider from '../components/home/DemoSlider'
import FeaturedServices from '../components/home/FeaturedServices'
import WhyChooseUs from '../components/home/WhyChooseUs'

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <DemoSlider />
      <FeaturedServices />
      <WhyChooseUs />
    </div>
  )
}

export default Home
