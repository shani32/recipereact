import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import styled from 'styled-components'

function Searched() {
    
    const [searched, setSearched]= useState([])
    let params= useParams()

    const getSearched=async(name)=>{
        const data= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&query=${name}`)
        const recipes= await data.json();
        setSearched(recipes.results)
        
  }

  useEffect(()=>{
    getSearched(params.search)
  },[params.search])

  return (
    <Grid>
        {searched.map((item)=>{
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
const Grid= styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
grid-gap:2rem;
margin:5rem
`
const Cards= styled.div`
img{
    width:90%;
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

export default Searched