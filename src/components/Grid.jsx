import React from 'react'
import imgkids from '/assets/school.jpeg'
import imgkids1 from '/assets/school1.jpeg'
import imgkids3 from '/assets/schoolT.jpeg'
import imgkids4 from '/assets/school4.jpeg'
import imgkids5 from '/assets/school5.jpeg'
import imgkids6 from '/assets/prae.jpeg'

const Grid = () => {
  return (
    <section className="overflow-hidden text-gray-700 animate__animated animate__backInLeft">
    <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
      <div className="flex flex-wrap -m-1 md:-m-2">
        <div className="flex flex-wrap w-1/3">
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="transform transition duration-500 hover:scale-105 block object-cover object-center w-full h-full rounded-lg"
              src={imgkids}/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/3">
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="transform transition duration-500 hover:scale-105 block object-cover object-center w-full h-full rounded-lg"
              src={imgkids1}/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/3">
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="transform transition duration-500 hover:scale-105 block object-cover object-center w-full h-full rounded-lg"
              src={imgkids3}/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/3">
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="transform transition duration-500 hover:scale-105 block object-cover object-center w-full h-full rounded-lg"
              src={imgkids4}/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/3">
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="transform transition duration-500 hover:scale-105 block object-cover object-center w-full h-full rounded-lg"
              src={imgkids5}/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/3">
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="transform transition duration-500 hover:scale-105 block object-cover object-center w-full h-full rounded-lg"
              src={imgkids6}/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Grid