import React from 'react'
import More from './buttons/More'
import CardEpi from './cards/CardEpi'

const Episodes = () => {
  return (
    <div className='max-w-screen-2xl mx-auto pt-20'>

        <div>
            <h2 className='text-center text-5xl text-green font-capriola'>Episodios</h2>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-1 md:justify-items-center  lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'>
            <CardEpi titulo="Nombre del episodio" texto="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>
            <CardEpi titulo="Nombre del episodio" texto="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>
            <CardEpi titulo="Nombre del episodio" texto="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>
            <CardEpi titulo="Nombre del episodio" texto="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."/>
        </div>

        <div className='pt-10'>
          <More texto="Ver Más"/>
        </div>
        

    </div>
  )
}

export default Episodes