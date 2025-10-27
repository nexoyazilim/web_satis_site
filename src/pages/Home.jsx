import React from 'react'
import HeroSection from '../components/home/HeroSection'
import DemoSlider from '../components/home/DemoSlider'
import FeaturedServices from '../components/home/FeaturedServices'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Technologies from '../components/home/Technologies'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DemoSlider />
      <FeaturedServices />
      <WhyChooseUs />
      <Technologies />
    </div>
  )
}

export default Home
