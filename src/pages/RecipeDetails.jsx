import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import React from 'react'


function RecipeDetails() {
    let params= useParams()
    const [details, setDetails]= useState([])
    const [active, setActive]=useState('instructions')
    const fetchDetails=async()=>{
        const data= await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_KEY}`)
        const detailData= await data.json()
        
        setDetails(detailData)
        console.log(detailData)
    }

    useEffect(()=>{
        fetchDetails()
       
    }, [params.name])
  return (
    <DetailWrapper>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
        <Info>
            <Button className={active==='instructions'? 'active':''} onClick={()=> setActive('instructions')}>Instruction</Button>
            <Button className={active==='ingredients'? 'active':''} onClick={()=> setActive('ingredients')}>Ingredients</Button>
       {active==='instructions' &&(
           <div>
                <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3> 
            </div>
       )}
        {active==='ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient)=>(
                <li key={ingredient.id}>{ingredient.original}</li>
            ))}
        </ul>  
        )}
        
        </Info>
    </DetailWrapper>
  )
}
const DetailWrapper= styled.div`
margin-top:10rem;
margin-bottom:5rem;
display:flex

.active{
    background:linear-gradient(35deg, #494949, #313131);
    color:white;
}
h2{
    margin-bottom:2rem;
    
}
li{
    font-size:1.2rem;
    line-height:2rem;
}
ul{
    margin-top:2rem;
}`
const Button= styled.div`
padding:1rem, 2rem;
color:white;
font-weight:600;
margin-right:2rem;
background:gray;
border:2px solid black;
width:150px;
cursor:pointer;
`

const Info= styled.div`
margin-left:10rem;
font-size:1.5rem;

`


export default RecipeDetails