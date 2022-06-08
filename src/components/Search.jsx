import React,{useState} from 'react'
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

function Search() {
    const [search, setSearch]= useState('')
    const navigate= useNavigate()

    const submitHandler=(e)=>{
        e.preventDefault();
        navigate('/searched/' + search)
    }
  return (
    <Form onSubmit={submitHandler}>
        <div>
            <FaSearch></FaSearch>
         <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} />
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