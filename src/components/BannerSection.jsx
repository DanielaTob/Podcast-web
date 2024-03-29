import React from 'react'
import { Link } from 'react-router-dom'
import More from './buttons/More'
import logo from '/assets/uus2.png'


const BannerSection = ({titulo}) => {
  return (
    

  <div className='mt-24 pt-6'>      
      <section className="py-4">
      <div className="container px-4 mx-auto animate__animated animate__backInLeft">
        <div className="px-7 py-6 bg-green rounded font-capriola transform transition-all duration-300 scale-100 hover:scale-95">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 pt-6 mb-10 md:mb-0">
              <h3 className="mb-1 text-3xl font-bold text-bluedark">
                {titulo}
              </h3>
              <p className="mb-4 mt-4 text-sm font-medium text-dark"> Aquí encontrarás más información. Desliza hacía abajo y conocerás más sobre los proyectos, imagenes y nuevas ideas. </p>
              <div className='justify-start flex'>
                <More texto="Volver"/>
              </div> 
            </div>
            <div className="w-full md:w-1/2 flex items-center">
              <img className="mx-auto h-48 md:h-48 lg:h-48" src={logo} alt=""/>
            </div>
          </div>
        </div>
      </div>
      </section>
  
  </div>


  )
}

export default BannerSection