import React from 'react'
import '../App.css'

const Banner = () => {
  return (
    <div>

        <div className="relative bg-hero-pattern h-screen w-full flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left bg-cover bg-center">
            <div className="absolute top-0 right-0 bottom-0 left-0"></div>

  
                <main className="px-8 sm:px-24 z-10 md:w-2/3">
                    <div className="">
                    <p className="m-3 mb-3 text-yellow sm:mt-5 sm:max-w-xl md:mt-5 text-xl font-medium">
                    Institución Educativa Veinte de Julio
                    </p>
                    <h2 className="text-5xl tracking-tight leading-10 font-extrabold text-green sm:leading-none md:text-7xl">
                    PODCAST SCHOOL</h2>


                    <div className="mt-5 sm:mt-8 sm:flex justify-start">
                    <div className="rounded-md shadow">
                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-light rounded-lg text-white bg-bluelight hover:bg-green focus:outline-none focus:border-green focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-md md:px-10">
    
                        <span>Empecemos</span>
                        </a>
                    </div>
            
                    </div>
                    </div>
                   
                </main>

                
        </div>


    </div>
  )
}

export default Banner