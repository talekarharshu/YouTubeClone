import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'

import Search from './Components/Navbar/search'



const App = () => {

  const [sidebar,setSidebar] = useState(true)

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />

        <Route path="/search/:input" element={<Search />} />



      </Routes>
    </div>
  )
}

export default App