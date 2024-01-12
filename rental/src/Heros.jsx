import React from 'react';
import "./Heros.css"
function Heros() {
  return (
    <div className='relative rounded-b-3xl back ' >
        <div className="relative bg-teal-500 bg-opacity-10 ">
      <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
          <div className="text-center">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-3 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                Your Trusted Partner <span className='text-teal-500 text-nowrap'> In Rental Housing</span>
              </h2>
              <h1 className="text-gray-700 font-semibold text-2xl">
                Explore, Discover,<span className='text-teal-400'> Rent </span>
              </h1>
            </div>
            <div className='bg-cyan-50 pb-6 rounded-3xl backdrop-blur-lg'>
              <div className='relative pt-3 rounded-t-3xl bg-teal-300 bg-opacity-20'>
                <ul className='flex items-center justify-center gap-8 sm:gap-24 pb-4 border-b-2 border-teal-200 '>
                  <li className='font-semibold hover:text-teal-500 cursor-pointer '>Buy</li>
                  <li className='font-semibold hover:text-teal-500 cursor-pointer'>Rent</li>
                  <li className='font-semibold hover:text-teal-500 cursor-pointer'>Commercial</li>
                  <li className='font-semibold hover:text-teal-500 cursor-pointer'>PG</li>
                </ul>
              </div>
              <div className='mt-4 '>
                <form className="flex items-center jus flex-col  lg:w-full w-[70%]   md:flex-row md:px-16 ">
                  <input
                    placeholder="search"
                    required=""
                    type="search"
                    className="flex-grow items-center w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-teal-400 focus:outline-none focus:shadow-outline"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-teal-400 hover:bg-teal-700  focus:shadow-outline focus:outline-none"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Heros;
