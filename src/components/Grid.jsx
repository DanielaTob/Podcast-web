import React from 'react'
import imgkids from '/assets/imgp.jpg'

const Grid = () => {
  return (
    <section className="overflow-hidden text-gray-700 ">
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
              src={imgkids}/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/3">
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="transform transition duration-500 hover:scale-105 block object-cover object-center w-full h-full rounded-lg"
              src={imgkids}/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/3">
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="transform transition duration-500 hover:scale-105 block object-cover object-center w-full h-full rounded-lg"
              src={imgkids}/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/3">
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="transform transition duration-500 hover:scale-105 block object-cover object-center w-full h-full rounded-lg"
              src={imgkids}/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/3">
          <div className="w-full p-1 md:p-2">
            <img alt="gallery" className="transform transition duration-500 hover:scale-105 block object-cover object-center w-full h-full rounded-lg"
              src={imgkids}/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Grid