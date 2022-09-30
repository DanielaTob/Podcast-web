import React from 'react'
import BannerSection from '../components/BannerSection'
import Grid from '../components/Grid'

const Galeria = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>

        <BannerSection titulo="Galería de Imagenes"/>

        <div className='pb-6'>
            <Grid />
        </div>

    </div>
  )
}

export default Galeria