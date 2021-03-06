import React from 'react'

const More = ({texto}) => {
  return (
    <div>
        <div className="rounded-md pb-6 flex justify-center">
            <a href="#" className="px-8 py-3 border border-transparent text-base leading-6 font-light rounded-lg text-white bg-bluelight focus:outline-none focus:border-green focus:shadow-outline-indigo transition duration-150 ease-in-out">
                <span>{texto}</span>
            </a>
        </div>
    </div>
  )
}

export default More