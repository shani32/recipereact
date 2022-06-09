import React from 'react'
import Gluten from '../components/Gluten'
import Popular from '../components/Popular'
import {motion} from 'framer-motion' 

const Home = () => {
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}>
        <Gluten/>
        <Popular/>
    </motion.div>
  )
}

export default Home