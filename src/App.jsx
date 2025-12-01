import React from 'react'
import Navbar from "./components/Navbar";
import HeroSection from '../../../Users/pothi/Downloads/virtualr-main/virtualr-main/src/components/HeroSection';
import FeatureSection from '../../../Users/pothi/Downloads/virtualr-main/virtualr-main/src/components/FeatureSection';
import Workflow from '../../../Users/pothi/Downloads/virtualr-main/virtualr-main/src/components/Workflow';
import Pricing from '../../../Users/pothi/Downloads/virtualr-main/virtualr-main/src/components/Pricing';
import Testimonials from '../../../Users/pothi/Downloads/virtualr-main/virtualr-main/src/components/Testimonials';
import Footer from '../../../Users/pothi/Downloads/virtualr-main/virtualr-main/src/components/Footer';

const App = () => {
  return (
    <div>
    <Navbar></Navbar>
      <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection/>
    <FeatureSection/>
    <Workflow/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
      </div>
    </div>
  )
}

export default App
