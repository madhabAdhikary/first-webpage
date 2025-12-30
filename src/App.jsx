import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Kaam from './pages/Kaam'
import Navbar from './components/Navbar'
import Footer from './components/footer'

const App = () => {
  return (
    <div className='h-screen p-6 bg-[#1c1f2e] text-white overflow-hidden' >
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/Blogs'  element={<Blogs />} />
        <Route path='/Kaam'  element={<Kaam />} />
      </Routes>


      <Footer />
    </div>
    
  )
}

export default App
