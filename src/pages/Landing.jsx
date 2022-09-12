import React from 'react'
import Banner from '../components/Banner'
import Episodes from '../components/Episodes'
import Footer from '../components/Footer'
import Ours from '../components/Ours'
import Slider from '../components/Slider'

const Landing = () => {
  return (
    <div className="App font-capriola bg-bluedark max-w-screen-2xl mx-auto">
      <Banner />
      <Episodes />
      <Ours />

      <Slider/>

      <Footer />
      
    </div>
  )
}

export default Landing