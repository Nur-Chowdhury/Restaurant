import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Banner from './Components/Banner'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'

import AOS from "aos";
import "aos/dist/aos.css"

export default function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <Testimonial />
      <Footer />
    </div>
  )
}
