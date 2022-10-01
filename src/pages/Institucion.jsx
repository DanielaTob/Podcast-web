import React from 'react'
import BannerSection from '../components/BannerSection'
import Insti from '../components/Insti'

const Institucion = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>

        <BannerSection titulo="Institución Educativa Veinte de Julio"/>

        <div className='px-4 min-h-screen mx-auto'>
            <Insti/>
        </div>


    </div>
  )
}

export default Institucion