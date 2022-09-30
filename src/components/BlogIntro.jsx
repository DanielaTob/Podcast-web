import React from "react";
import More from "./buttons/More";

const BlogIntro = () => {
  return (
    <div>
      <section className="flex flex-col justify-center antialiased  text-gray-200 min-h-screen">
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
                  src="https://preview.cruip.com/open-pro/images/blog-post-01.jpg"
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
                        className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
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
                        Titulo del Proyecto
                      </a>
                    </li>
                  </ul>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                  <a
                    className="hover:text-gray-100 transition duration-150 ease-in-out"
                    href="#0"
                  >
                    Titulo del proyecto
                  </a>
                </h3>
              </header>
              <p className="text-lg text-gray-400 flex-grow">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
              <footer className="flex items-center mt-4">
                <More texto="Ver Proyecto" />
              </footer>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogIntro;
