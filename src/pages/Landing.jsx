import React from 'react'
import Slider from 'react-slick'
import Banner from '../components/Banner'
import Episodes from '../components/Episodes'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Ours from '../components/Ours'

const Landing = () => {
  return (
    <div className="App font-capriola bg-bluedark max-w-screen-2xl mx-auto">
      <Header />
      <Banner />
      <Episodes />
      <Ours />

      <Slider/>

      <Footer />
      
    </div>
  )
}

export default Landing