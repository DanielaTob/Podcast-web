import React from 'react'
import More from '../buttons/More'

const CardOurs = ({ image, title, text }) => {
  return (
    <div className=''>

<div className="relative max-w-xs mx-auto md:max-w-md mt-6 min-w-0 break-words bg-green w-full mb-6 shadow-lg rounded-xl">
    <div className="px-6">
        <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
                <div className="relative">
                    <img src={image} className="absolute -m-16 -ml-20 lg:-ml-16 max-w-[120px]"/>
                </div>
            </div>
        </div>
        <div className="text-center pt-20">
            <h3 className="text-2xl text-yellow font-bold leading-normal mb-1">{title}</h3>
        </div>
        <div className="mt-6 py-6 border-t border-yellow text-center">
            <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                    <p className="font-light leading-relaxed text-dark mb-4">{text}</p>
                </div>
            </div>
        </div>
        
    </div>
</div>

    </div>
  )
}

export default CardOurs