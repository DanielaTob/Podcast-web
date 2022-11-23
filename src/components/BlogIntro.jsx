import React from "react";
import More from "./buttons/More";
import imgkids from '/assets/imgp.jpg'

const BlogIntro = () => {
  return (
    <div>
      <section className="flex flex-col justify-center antialiased  text-gray-200 py-32">
        <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
          <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
            <a className="relative block group" href="#0">
              <div
                className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                aria-hidden="true"
              ></div>
              <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                <img
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                  src={imgkids}
                  width="540"
                  height="303"
                  alt="Blog post"
                />
              </figure>
            </a>
            <div>
              <header>
                <div className="mb-3">
                  <ul className="flex flex-wrap text-xs font-medium -m-1">
                    <li className="m-1">
                      <a
                        className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-green transition duration-150 ease-in-out"
                        href="#0"
                      >
                        Proyecto
                      </a>
                    </li>
                    <li className="m-1">
                      <a
                        className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out"
                        href="#0"
                      >
                        Docente
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold leading-tight mb-2">
                  <a
                    className="hover:text-gray-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Docente Luz Stella Moreno Losada
                  </a>
                </h3>
              </header>
              <p className="text-sm text-gray-400 flex-grow">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
              
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogIntro;
