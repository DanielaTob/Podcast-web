import React from 'react'
import { Link } from 'react-router-dom'
import More from './buttons/More'
import CardOurs from './cards/CardOurs'
import us1 from '/assets/us.png'
import us2 from '/assets/uus2.png'
import us3 from '/assets/uus3.png'


const Ours = () => {
  return (
    <div id="nosotros" className='max-w-screen-2xl mx-auto pt-28'>
        <div>
            <h2 className='text-center text-5xl text-green font-capriola'>Nosotros</h2>
        </div> 
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:px-16 pt-20'>
      <div>
      <CardOurs image={us1} title="Institusión Educativa" text="La Institución Educativa Técnico Industrial Veinte de Julio es un establecimiento público adscrito a la Secretaria de Educación Municipal."/>
        <Link to="/institucion">
          <More texto="Conoce Más"/>
        </Link>
      </div>

      <div>
      <CardOurs image={us2} title="Proyectos" text="En esta sección podrás encontrar interesantes proyectos y propuestas de trabajo en educación inicial y preescolar, aplicados a diferentes áreas, para desarrollar en el aula."/>
        <Link to="/proyectos">
          <More texto="Conoce Más"/>
        </Link>
      </div>

      <div>
      <CardOurs image={us3} title="Galería" text="En esta sección podrás encontrar imagenes sobre los proyetos y actividades especiales realizadas en la Institución Educativa Veinte de Julio Sede Ignacio Rengifo, año lectivo 2022."/>
        <Link to="/galeria">
          <More texto="Conoce Más"/>
        </Link>
      </div>
    
       
      </div>
      </div>
  )
}

export default Ours