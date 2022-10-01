import React, { useState } from 'react'
import CardModal from './cards/CardModal';

const Modal = ({titulo}) => {

    const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div className="">
      <button
      className="px-6 py-2 border border-transparent text-sm leading-6 font-light rounded-lg text-white bg-bluelight focus:outline-none focus:border-green focus:shadow-outline-indigo transition duration-150 ease-in-out"
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
                      className=" text-white bg-red-600 rounded-lg font-bold  px-6 py-2 text-base outline-none  mr-1 mb-1 "
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