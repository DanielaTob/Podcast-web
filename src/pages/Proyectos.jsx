import React from 'react'
import CardProject from '../components/cards/CardProject'
import Modal from '../components/Modal'
import ProyectoSection from '../components/ProyectoSection'

const Proyectos = () => {
  return (
    <div>
        <ProyectoSection />

        <div className='py-16 w-full gap-10 flex-wrap flex items-center justify-center'>
          <div className='font-capriola'>
            <CardProject />
            <div className='pt-4 text-center'>
              <Modal titulo="Proyecto 1"/>
            </div>
          </div>

          <div className='font-capriola'>
            <CardProject />
            <div className='pt-4 text-center'>
              <Modal titulo="Proyecto 2"/>
            </div>
          </div>

          <div className='font-capriola'>
            <CardProject />
            <div className='pt-4 text-center'>
              <Modal titulo="Proyecto 3"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Proyectos