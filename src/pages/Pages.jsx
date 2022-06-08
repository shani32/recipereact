import React from 'react'
import Home from './Home'
import Option from './Option'
import {  Route, Routes } from 'react-router-dom'

const Pages = () => {
  return (
    <div>
    
        <Routes>
          <Route path='/' element={<Home/>}/>  
          <Route path='/option/:type' element={<Option/>}/>  
        </Routes>
   
    </div>
  )
}

export default Pages