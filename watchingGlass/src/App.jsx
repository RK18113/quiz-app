import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'  // Changed from react-router

import Home from './pages/Home.jsx'
import Questions from './pages/Questions.jsx'
import Result from './pages/Result.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/questions' element={<Questions/>} />
        <Route path='/result' element={<Result/>} />  {/* Make sure this matches your navigation */}
      </Routes>
    </BrowserRouter>
  )
}

export default App