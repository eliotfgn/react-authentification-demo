import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.png";
function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full bg-indigo-300 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to={"/"}>
                <img src={logo1} alt="logo" className=" w-10 h-10" />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2  rounded-md outline-none focus:border-black focus:border border border-black "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black font-bold"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill="black"
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-black font-bold "
                      fill="black"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                       fill="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li>
                  <Link
                    to="/"
                    className="text-black hover:text-indigo-400 font-bold"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-black hover:text-indigo-400 font-bold"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-black hover:text-indigo-400 font-bold"
                    aria-current="page"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>

              <div className="mt-3 space-y-2 md:hidden">
                <Link
                  to="/login"
                  className="inline-block w-full px-4 py-2 text-center text-white bg-blue-600 rounded-md shadow hover:bg-blue-800"
                  aria-current="page"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                  aria-current="page"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden space-x-2 md:inline-block">
            <Link
              to="/login"
              className="px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-800"
              aria-current="page"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              aria-current="page"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Home;
