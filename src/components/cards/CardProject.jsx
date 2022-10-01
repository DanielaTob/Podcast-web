import React from 'react'
import imgkids2 from '/assets/imgp.jpg'

const CardProject = () => {
  return (
    <div>

<div className="w-60 p-2 bg-green rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
  
    <img className="h-40 object-cover rounded-xl" src={imgkids2} alt=""/>
    <div className="p-2">
 
    <h2 className="font-bold text-lg mb-2 text-yellow">Heading</h2>

    <p className="text-sm text-dark">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p>
    </div>

  </div>

    </div>
  )
}

export default CardProject