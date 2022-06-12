import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

const Gluten = () => {

  const [gluten, setGluten]=useState([])

  useEffect(()=>{
    getGluten()
  },[])

  const getGluten=async()=>{
    const check=localStorage.getItem('gluten');

    if(check){
        setGluten(JSON.parse(check))
    }else{
      const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=18&intolerances=gluten`)
      const data= await api.json()
      localStorage.setItem('gluten', JSON.stringify(data.recipes))
      setGluten(data.recipes)
      console.log(data.recipes)
    }

   
  }
  return (
    <div>
      
        <Wrapper>
          <h3>Gluten Free Picks</h3>
          <Splide options={{
            perPage:4,
            arrows:false,
            pagination:false,
            drag:"free",
            gap:"3rem"
          }}>

            {gluten.map((recipe)=>{
              return(
                <SplideSlide key={recipe.id}>
                  <Card>

                    <Link to={'/recipe/' + recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient/>
                    </Link>    
                  </Card>
                </SplideSlide>
              )
            })}
          </Splide>
        </Wrapper>
      
    </div>
  )
}

const Wrapper= styled.div`
margin: 4rem 0rem
`
const Card= styled.div`
min-height:20rem;
border-radius:1rem;
overflow:hidden;
position:relative;
margin:5px;

img{
  border-radius:2rem;
  posu=ituin:absolute,
  left:0,
  width:100%;
  object-fit:cover;
}
p{
  position:absolute;
  z-index:10;
  left:50%;
  bottom:0%;
  transform:translate(-50%, 15%);
  color:white;
  width:100%;
  text-align:center;
  font-weight:600;
  font-size:1rem;
  height:40%;
  display:flex;
  justify-content:center;
  align-items:center;
}
`
const Gradient=styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Gluten