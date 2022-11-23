import React from 'react'
import More from './buttons/More'
import CardEpi from './cards/CardEpi'

const Episodes = () => {
  return (
    <div id="episodios" className='max-w-screen-2xl mx-auto pt-28 pb-10'>

        <div>
            <h2 className='text-center text-5xl text-green font-capriola'>Episodios</h2>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-1 md:justify-items-center  lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'>
            <CardEpi titulo="Episodio 1 - Niños Medicina" />
            <CardEpi titulo="Episodio 2 - Niños Medicina"  />
            <CardEpi titulo="Episodio 3 - Niños Medicina"  />
            <CardEpi titulo="Episodio 4 - Niños Medicina" />
        </div>

        

    </div>
  )
}

export default Episodes