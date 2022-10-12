import React from 'react'
import { Link } from 'react-router-dom'
import us1 from '/assets/us.png'

const Header = () => {


  return (
    <div className='max-w-screen-3xl fixed mx-auto z-50 top-0 text-xl bg-bluedark shadow w-full justify-start font-medium  md:p-4 items-center'>

        <nav className="font-capriola bg-bluedark  px-2 sm:px-4 py-2.5 rounded ">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <Link to="/" className="flex items-center">
        <img src={us1} className="mr-3 h-9 sm:h-9" alt="Logo" />
        <span className="mt-2 self-center text-xl font-semibold whitespace-nowrap text-green">Podcast School</span>
    </Link>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-bluedark ">
        <li>
          <a href="#inicio" className="block py-2 pr-4 pl-3 text-green rounded hover:text-bluelight md:p-0 " aria-current="page">Inicio</a>
        </li>
        <li>
          <a href="#episodios" className="block py-2 pr-4 pl-3 text-green rounded  md:border-0 md:p-0  hover:text-bluelight">Episodios</a>
        </li>
        <li>
          <a href="#nosotros" className="block py-2 pr-4 pl-3 text-green rounded  md:border-0 md:p-0  hover:text-bluelight">Nosotros</a>
        </li>
        <li>
          <a href="#footer" className="block py-2 pr-4 pl-3 text-green rounded  md:border-0 md:p-0  hover:text-bluelight">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>







    </div>
  )
}

export default Header