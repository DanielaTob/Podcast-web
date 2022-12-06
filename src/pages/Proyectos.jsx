import React from 'react'
import CardProject from '../components/cards/CardProject'
import Modal from '../components/Modal'
import ProyectoSection from '../components/ProyectoSection'
import imgHuerta from '/assets/imgHuerta.jpeg'
import imgAire from '/assets/aireProyect.jpeg'
import imgEntorno from '/assets/entorno.jpeg'

const Proyectos = () => {
  return (
    <div>
        <ProyectoSection />

        <div className='py-16 w-full gap-10 flex-wrap flex items-center justify-center'>
          <div className='font-capriola'>
            <CardProject titulo="Huerta Escolar" imgCard={imgHuerta} text="El Proyecto Huerta escolar permite abordar de forma global o interdisciplinar, según la edad, una pluralidad de objetivos
            educativos."/>
            <div className='pt-4 flex justify-center'>
              <Modal titulo="Huerta Escolar" imgP={imgHuerta} titulo2="Huerta Escolar" texto="Desde la perspectiva de la innovación educativa y de la educación ambiental,el huerto como recurso educativo supone un instrumento de primer orden, puesto que permite poner en práctica un aprendizaje activo y cooperativo basado en la resolución planificada de problemas, así como un eficaz desarrollo de actitudes y valores conducentes a
                      unos comportamientos más comprometidos con la conservación y mejora del entorno y
                      con la utilización sostenible de los recursos ambientales."/>
            </div>
          </div>

          <div className='font-capriola'>
            <CardProject titulo="El Aire" imgCard={imgAire} text="El Proyecto Aire Limpio está implementado a medida y adaptado para abordar la contaminación del aire en el centro escolar y sus alrededores. "/>
            <div className='pt-4 flex justify-center'>
              <Modal titulo="El Aire" imgP={imgAire} titulo2="El Aire" texto="El proyecto El Aire contempla que se pueda compartir entre docentes y estudiantes de la Institución su propia Guía de Acción en Salud Medioambiental Escolar, en la que los alumnos serán los protagonistas, utilizando su creatividad y el trabajo colaborativo para poner en marcha medidas que mejoren la salud medioambiental de su entorno."/>
            </div>
          </div>

          <div className='font-capriola'>
            <CardProject titulo="El Agua" imgCard={imgEntorno} text=""/>
            <div className='pt-4 flex justify-center'>
              <Modal titulo="El Agua" imgP={imgEntorno} titulo2="El Agua" texto=""/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Proyectos