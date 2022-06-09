import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import React from 'react'
import {NavLink} from 'react-router-dom'


function Category() {
  return (
    <List>
        <SLink to={'/option/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/option/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to={'/option/Thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/option/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
        
    </List>
  )
}
const List= styled.div`
display:flex;
justify-content:center;
margin:2rem 0rem;
`

const SLink= styled(NavLink)`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
margin-right:2rem;
text-decoration:none;
cursor:pointer;
background:gray;
width:5rem;
height:5rem;

h4{
color:white;
font-size:1rem
}
svg{
    color:white;
    font-size:1.5rem;
}
&.active{
    background: linear-gradient(to right, #3C9209, #CCCCCC);
    svg{
        color:white;
    }
    h4{
        color:white;
    }
    }`
export default Category
