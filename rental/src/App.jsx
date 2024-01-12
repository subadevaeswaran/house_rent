import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Plus, Search } from 'lucide-react'
import { Input } from 'postcss'
import Heros from './Heros'
import Services from './assets/Services'
import { Footer } from './assets/Footer'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Login from './assets/Login'
import Listing from './assets/Listing'
import Register from './assets/Register'
import Post from './assets/Post'

function App() {
  return (
    <Router>
      <div>
        <header className="bg-white w-full">
          <div className="mx-auto flex h-20 max-w-screen-3xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 border w-full shadow-md">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="82" height="40" fill="none" viewBox="0 0 82 40">
                <path fill="#FFD43D" d="M73.365 19.71c0 2.904-2.241 5.31-5.27 5.31-3.03 0-5.228-2.406-5.228-5.31 0-2.905 2.199-5.312 5.228-5.312s5.27 2.407 5.27 5.311Z"></path>
                <path fill="#FF0C81" d="M48.764 19.544c0 2.946-2.323 5.145-5.27 5.145-2.904 0-5.227-2.2-5.227-5.145 0-2.947 2.323-5.104 5.228-5.104 2.946 0 5.27 2.158 5.27 5.104Z"></path>
                <path fill="#11EEFC" d="M20.074 25.02c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312Z"></path>
                <path fill="#171A26" d="M68.095 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.855-10.83 11.12-10.83 6.349 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.03 0 5.27-2.406 5.27-5.31 0-2.905-2.24-5.312-5.27-5.312-3.029 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM43.08 40c-4.813 0-8.506-2.116-10.373-5.934l4.896-2.655c.913 1.784 2.614 3.195 5.394 3.195 3.486 0 5.85-2.448 5.85-6.473v-.374c-1.12 1.411-3.111 2.49-6.016 2.49-5.768 0-10.373-4.481-10.373-10.581 0-5.934 4.813-10.788 11.12-10.788 6.431 0 11.162 4.605 11.162 10.788v8.299C54.74 35.27 49.76 40 43.08 40Zm.415-15.311c2.946 0 5.27-2.2 5.27-5.145 0-2.947-2.324-5.104-5.27-5.104-2.905 0-5.228 2.158-5.228 5.104s2.323 5.145 5.228 5.145ZM20.074 30.54c-6.307 0-11.12-4.897-11.12-10.872 0-5.934 4.854-10.83 11.12-10.83 6.348 0 11.162 4.938 11.162 10.83 0 5.975-4.855 10.871-11.162 10.871Zm0-5.52c3.029 0 5.27-2.406 5.27-5.31 0-2.905-2.241-5.312-5.27-5.312-3.03 0-5.228 2.407-5.228 5.311 0 2.905 2.199 5.312 5.228 5.312ZM0 0h5.892v30H0V0ZM82 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
              </svg>
            </a>

            <div className="flex items-center justify-end md:justify-between">
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Link to='/Post'
                    className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                    href=''
                  >
                    Add Post
                  </Link>
                  <Link
                    to='/login'
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                  >
                    Login
                  </Link>
                </div>
                <button className='hidden rounded-full bg-gray-700 px-5 py-5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block'>
                </button>
                <button
                  className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                >
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <>
              <Heros />
              <div className='flex flex-col items-center mx-auto py-12 bg-gradient-to-r from-teal-50 to-slate-50'>
                <h2 className='text-3xl font-bold'>Explore Our <span className='text-teal-600'> Property </span></h2>
                <Listing />
              </div>
              <Services />
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Post" element ={<Post />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
