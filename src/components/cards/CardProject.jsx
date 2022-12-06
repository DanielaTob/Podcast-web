import React from 'react'


const CardProject = ({text, titulo, imgCard}) => {
  return (
    <div>

<div className="w-60 p-2 bg-green rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
  
    <img className="h-40 object-cover rounded-xl" src={imgCard} alt=""/>
    <div className="p-2">
 
    <h2 className="font-bold text-lg mb-2 text-yellow">{titulo}</h2>

    <p className="text-sm text-dark">{text}</p>
    </div>

  </div>

    </div>
  )
}

export default CardProject