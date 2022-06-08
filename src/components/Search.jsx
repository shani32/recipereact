import React,{useState} from 'react'
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa'
function Search() {
    const [search, setSearch]= useState('')
  return (
    <Form>
        <div>
            <FaSearch></FaSearch>
         <input type="text" />
        </div>
    </Form>
  )
}

const Form= styled.form`
margin:0rem 20rem;

div{
   position:relative;
    width:100%; 
    margin-bottom:1rem
}
input{
    border:none;
    background: gray;
    font-size:1.5rem;
    color:white;
    border:none;
    width:100%;
    
    
}
svg{
    color:white;
    position: absolute;
    top:30%;
    left:1%;
    tranform:translate(100%, -50%);
}
`
export default Search