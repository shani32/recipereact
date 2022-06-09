import React from 'react'
import Home from './Home'
import Option from './Option'
import {  Route, Routes, useLocation } from 'react-router-dom'
import Searched from './Searched'
import RecipeDetails from './RecipeDetails'
import { AnimatePresence } from 'framer-motion'

const Pages = () => {
    const location=useLocation()
  return (
    <div>
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>}/>  
          <Route path='/option/:type' element={<Option/>}/>  
          <Route path='/searched/:search' element={<Searched/>}/>
          <Route path='/recipe/:name' element={<RecipeDetails/>}/>
        </Routes>
   </AnimatePresence>
    </div>
  )
}

export default Pages