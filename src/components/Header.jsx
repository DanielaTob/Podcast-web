import React from 'react'

const Header = () => {
  return (
    <div className='max-w-screen-3xl fixed mx-auto z-20 top-0 text-xl bg-bluedark w-full justify-start font-medium  md:p-4 items-center'>
        
        <nav>

        <ul className='hidden md:flex gap-8 p-6 text-colorparagraph text-green font-capriola'>
            <li className='cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-bluelight'>Inicio</li>
            <li className='cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-bluelight'>Podcast</li>    
            <li className='cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-bluelight'>Nosotros</li>    
            <li className='cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-bluelight'>Galería</li>   
            <li className='cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-bluelight'>Contacto</li>   
        </ul>

        </nav>
    </div>
  )
}

export default Header