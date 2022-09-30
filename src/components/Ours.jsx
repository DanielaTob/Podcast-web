import React from 'react'
import { Link } from 'react-router-dom'
import More from './buttons/More'
import CardOurs from './cards/CardOurs'
import us1 from '/assets/us.png'
import us2 from '/assets/uus2.png'
import us3 from '/assets/uus3.png'


const Ours = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl mx-auto pt-40 lg:px-16 gap-20'>
      <div>
      <CardOurs image={us1} title="Institusión Educativa" text="An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm."/>
        <Link to="/institucion">
          <More texto="Conoce Más"/>
        </Link>
      </div>

      <div>
      <CardOurs image={us2} title="Proyectos" text="An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm."/>
        <Link to="/proyectos">
          <More texto="Conoce Más"/>
        </Link>
      </div>

      <div>
      <CardOurs image={us3} title="Galería" text="An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm."/>
        <Link to="/galeria">
          <More texto="Conoce Más"/>
        </Link>
      </div>
    
       
      </div>
  )
}

export default Ours