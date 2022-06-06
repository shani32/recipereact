import React from 'react'
import Home from './Home'
import Option from './Option'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Pages = () => {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>  
          <Route path='/option' element={<Option/>}/>  
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Pages