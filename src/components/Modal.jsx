import React, { useState } from 'react'
import CardModal from './cards/CardModal';

const Modal = ({titulo}) => {

    const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div className="">
      <button
      className="button button--moema border-blue-500 px-4 py-2 bg-bluelight hover:bg-blue-500 hover:text-white text-gray-300 relative block focus:outline-none border-2 border-solid rounded-lg text-xs font-semibold uppercase tracking-widest"
      onClick={() => setShowModal(true)}
      > 
      Ver Proyecto
      </button>
    </div>
    {showModal ? (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="text-green flex items-start justify-between p-5 ">
                <h3 className="text-xl font-semibold">{titulo}</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-sky-600 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="">

                  <CardModal />
      
                  <div className="px-4 py-4 flex justify-end">
                    <button
                      className=" text-white bg-red-600 text-xs rounded-lg font-bold  px-6 py-2 outline-none  mr-1 mb-1 "
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cerrar
                    </button>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
  </>
  )
}

export default Modal