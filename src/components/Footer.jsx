import React from "react";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineLanguage } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-green pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-bluedark">
                Podcast Web!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-bluedark">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex gap-4">
                <div className="items-center justify-center bg-bluedark text-white shadow-lg font-normal px-2.5 py-2.5 rounded-full">
                  <MdLocationOn className="text-center text-xl" />
                </div>

                <div className="items-center justify-center bg-bluedark text-white shadow-lg font-normal px-2.5 py-2.5 rounded-full">
                  <MdOutlineLanguage className="text-center text-xl" />
                </div>

                <div className="items-center justify-center bg-bluedark text-white shadow-lg font-normal px-2.5 py-2.5 rounded-full">
                  <MdPermPhoneMsg className="text-center text-xl" />
                </div>

                <div className="items-center justify-center bg-bluedark text-white shadow-lg font-normal px-2.5 py-2.5 rounded-full">
                  <MdEmail className="text-center text-xl" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-bluedark text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-dark hover:text-yellow font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-dark hover:text-yellow font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-dark hover:text-yellow font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-dark hover:text-yellow font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-bluedark text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-dark hover:text-yellow font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-dark hover:text-yellow font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-dark hover:text-yellow font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-dark hover:text-yellow font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-bluedark" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-dark font-semibold py-1">
                Copyright © <span id="get-current-year">2022</span> by
                <a
                  href="https://daniela-tobar-moreno.vercel.app/"
                  target="_blank"
                  className="text-dark hover:text-yellow"
                >
                  {" "}
                  Daniela Tobar.
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
