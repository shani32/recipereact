import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'

function Option() {
    const [option, setOption]=useState([])
    let params= useParams()

   

    const getOption=async(name)=>{
        const data= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&cuisine=${name}`)
        const recipes= await data.json();
        setOption(recipes.results)
        
  }
    useEffect(()=>{
        getOption(params.type)
        console.log(params.type)
    },[params.type])

  return (
    <Grid >
        {option.map((item)=>{
            return(
                
                <Cards key={item.id}>
                    <Link to={'/recipe/'+ item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                    </Link>
                </Cards>
               
            )
        })}

    </Grid>
  )
}


const Grid= styled(motion.div)`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap:1rem;
margin-left:5rem;
`
const Cards= styled.div`
img{
    width:400px;
    border-radius:2rem;
    text-align:center;
}
a{
    text-decoration:none;
}
h4{
    text-align:start;
    padding:1rem;
}`
export default Option