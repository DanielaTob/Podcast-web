import React from 'react'

const More = ({texto}) => {
  return (
    <div>
        <div className="rounded-md pb-6 flex justify-center">
            <a href="/#nosotros" className="button button--moema px-4 py-2 bg-bluelight border-blue-500 hover:bg-blue-500 hover:text-white text-gray-300 relative block focus:outline-none border-2 border-solid rounded-lg text-xs text-center font-semibold uppercase tracking-widest">
                <span>{texto}</span>
            </a>
        </div>
    </div>
  )
}

export default More