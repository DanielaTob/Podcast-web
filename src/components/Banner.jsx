import React from 'react'
import '../App.css'
import bg from '/assets/bg1.png'
import img1 from '/assets/img-earth.png'

const Banner = () => {
  return (
    <div>
        <div>
        <img className='img1' src={bg} />
        </div>
        <div>
        <img className='img2 px-4' src={img1} />
        </div>
    </div>
  )
}

export default Banner