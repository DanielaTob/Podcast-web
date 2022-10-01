import React from 'react'
import imgkids from '/assets/imgp.jpg'

const Insti = () => {
  return (
    <div>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center font-capriola">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-green pb-4">Misión</h1>
                    <p className="font-normal text-base leading-6 text-dark bg-green px-4 py-4 rounded text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center font-capriola">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-green pb-4">Visión</h1>
                    <p className="font-normal text-base leading-6 text-dark bg-green px-4 py-4 rounded text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8 ">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={imgkids} alt="Alexa featured Img" />
                            <img className="md:hidden block" src={imgkids} alt="Alexa featured Img" />
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={imgkids} alt="Olivia featured Img" />
                            <img className="md:hidden block" src={imgkids} alt="Olivia featured Img" />
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={imgkids} alt="Liam featued Img" />
                            <img className="md:hidden block" src={imgkids} alt="Liam featued Img" />
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={imgkids} alt="Elijah featured img" />
                            <img className="md:hidden block" src={imgkids} alt="Elijah featured img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Insti