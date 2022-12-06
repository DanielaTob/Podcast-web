import React from 'react'


const CardModal = ({titulo, texto1, texto2, img}) => {
  return (
<div class="py-4 bg-white">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img src={img} alt="image" loading="lazy" width="" height=""/>
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-lg text-green font-bold text-justify">{titulo}</h2>
          <p class="mt-4 text-dark text-sm text-justify">{texto1}</p>
        </div>
      </div>
  </div>
</div>
  )
}

export default CardModal