
import React from 'react'
import './index.css'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Collection from './pages/Collection'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

  import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function App() {
 
  return (
     <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
       <toast/>
      <Navbar/>
      <SearchBar/>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/login" element={<Login />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/placeorder" element={<PlaceOrder />} />
         <Route path="/orders" element={<Orders />} />
         <Route path="/product/:productId" element={<Product />} />
         <Route path="/collection" element={<Collection />} />

      </Routes>

      <Footer/>
     </div>
  )
}

export default App
