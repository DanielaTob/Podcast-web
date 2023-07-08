import React from 'react'
import More from './buttons/More'
import episodio1 from './player/music/episodio1.mp3'
import episodio2 from './player/music/episodio2.mp3'
import episodio3 from './player/music/episodio3.mp3'
import episodio4 from './player/music/episodio4.mp3'
import CardEpi from './cards/CardEpi'

const Episodes = () => {
  return (
    <div id="episodios" className='max-w-screen-2xl mx-auto pt-28 pb-10'>

        <div>
            <h2 className='text-center text-5xl text-green font-capriola'>Episodios</h2>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-1 md:justify-items-center  lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'>
            <CardEpi titulo="Episodio 1 - Niños Medicina" song={episodio1}/>
            <CardEpi titulo="Episodio 2 - Niños Medicina" song={episodio2}/>
            <CardEpi titulo="Episodio 3 - Niños Medicina" song={episodio3}/>
            <CardEpi titulo="Episodio 4 - Niños Medicina" song={episodio4}/>
        </div>

        

    </div>
  )
}

export default Episodes