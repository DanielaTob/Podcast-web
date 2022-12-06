import React from 'react'
import imgkids from '/assets/school.jpeg'
import imgkids1 from '/assets/school1.jpeg'
import imgkids3 from '/assets/schoolT.jpeg'
import imgkids4 from '/assets/school4.jpeg'
import imgkids5 from '/assets/school5.jpeg'

const Insti = () => {
  return (
    <div>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8 animate__animated animate__backInLeft">
                <div className="w-full lg:w-5/12 flex flex-col justify-center font-capriola">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-green pb-4">Misión</h1>
                    <p className="font-normal text-base leading-6 text-dark bg-green px-4 py-4 rounded text-justify">La Institución Educativa Técnico Industrial Veinte de Julio, contribuye en la formación integral del estudiante en los niveles de educación preescolar, básica primaria y bachillerato técnico industrial; con pertinencia, calidad y valores para una armónica convivencia, con un enfoque de inclusión, mediante el desarrollo de competencias referidas al desempeño académico, laboral y socio-ambiental.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src={imgkids} alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12 animate__animated animate__backInLeft">
                <div className="w-full lg:w-5/12 flex flex-col justify-center font-capriola">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-green pb-4">Visión</h1>
                    <p className="font-normal text-base leading-6 text-dark bg-green px-4 py-4 rounded text-justify">En el año 2020 la Institución Educativa Técnico Industrial Veinte de Julio, será reconocida como una de las tres mejores Instituciones Técnicas-Industriales del Municipio de Santiago de Cali, en la formación para el trabajo comprometida con el desarrollo socio-ambiental y cultural del área de influencia. Mediante programas académicos y tecnológicos, convenios interinstitucionales para la articulación con la Educación Técnica y Superior.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8 ">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={imgkids1} alt="Alexa featured Img" />
                            <img className="md:hidden block" src={imgkids1} alt="Alexa featured Img" />
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={imgkids3} alt="Olivia featured Img" />
                            <img className="md:hidden block" src={imgkids3} alt="Olivia featured Img" />
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={imgkids4} alt="Liam featued Img" />
                            <img className="md:hidden block" src={imgkids4} alt="Liam featued Img" />
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src={imgkids5} alt="Elijah featured img" />
                            <img className="md:hidden block" src={imgkids5} alt="Elijah featured img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Insti