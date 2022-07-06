import React from 'react'

const Header = () => {
  return (
    <div className='max-w-screen-2xl mx-auto fixed z-20 top-0 text-xl bg-bluedark w-full justify-start font-medium  md:p-4 items-center'>
        
        <nav>

        <ul className='cursor-pointer hidden md:flex gap-8 p-6 text-colorparagraph text-green'>
            <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-bluelight'>Inicio</li>
            <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-bluelight'>Podcast</li>    
            <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-bluelight'>Nosotros</li>    
            <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-bluelight'>Galería</li>   
            <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-bluelight'>Contacto</li>   
        </ul>

        </nav>
    </div>
  )
}

export default Header