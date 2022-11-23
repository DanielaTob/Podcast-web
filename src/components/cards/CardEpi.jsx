import React from 'react'
import imgp from '/assets/imgp.jpg'
import Principal from '../../components/player/Principal'


const CardEpi = ({ titulo, texto }) => {


  return (
    <div className='pt-14 lg:px-10 transform transition-all duration-300 scale-100 hover:scale-95'>
        
        <div className="lg:p-4 flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-bluelight hover:border-bluedark bg-green ">
            <img className="object-cover w-full h-52 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={imgp} alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-yellow">{titulo}</h5>
                    <p className="mb-3 font-normal text-xs text-dark">{texto}</p>
                    <Principal />
                </div>
        </div>


        
    </div>
  )
}

export default CardEpi