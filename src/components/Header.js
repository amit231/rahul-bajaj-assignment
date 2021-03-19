import React from 'react'
import styled from 'styled-components'

const BlueHeader = styled.div`
    width:100%;
    height:7%;
    background-color:blue;
    display:flex;
    justify-content:center;    
    padding: 4px;
`
const AddBtn = styled.button`
    all:unset;
    text-transform:uppercase;
    background-color:rgb(22, 52, 116);
    margin: 0px 20px;
    height:70%;
    color:white;
    text-align:center;
    padding:7px 20px;
    border-radius:10px;
    &:hover{
        box-shadow:5px 2px 10px rgba(0,0,0,0.4)
    }
`

function Header(props) {
    return (
        <BlueHeader>
            <AddBtn onClick={props.addUser}>add new user</AddBtn>
        </BlueHeader>
    )
}

export default Header
