import React from 'react'
import logo from '/assets/uus2.png'

const BannerSection = ({titulo}) => {
  return (
    

  <div className='mt-24'>      
      <section className="py-4">
      <div className="container px-4 mx-auto">
        <div className="px-7 py-6 bg-green rounded">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 pt-6 mb-10 md:mb-0">
              <h3 className="mb-1 text-3xl font-bold text-bluedark">
                {titulo}
              </h3>
              <p className="mb-8 mt-4 md:mb-16 text-sm font-medium text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione eos maiores eius adipisci ullam inventore nemo.</p>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
              <img className="mx-auto h-48" src={logo} alt=""/>
            </div>
          </div>
        </div>
      </div>
      </section>
  
  </div>


  )
}

export default BannerSection