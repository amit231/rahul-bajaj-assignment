import React, { useState } from 'react'
import styled from 'styled-components'

const BackGround = styled.div`
    width: 50%;
    display: flex;
    flex-direction:column;
    min-height: 20%;
    background-color:rgb(159, 178, 219);
    border-radius:20px;
    margin:10px auto;
    padding: 30px 150px;
    color:grey;
    label{
        text-transform:uppercase;
    }
    
    @media(max-width:500px){
        padding: 30px 25px;

    }
`
const Submit = styled.button`
    all:unset;
    color:white;
    text-align:center;
    width:30%;
    margin-top:10px;
    background-color:blue;
    border-radius:5px;
    position: relative;
    left:50%;
    transform:translateX(-50%);
`


function Form(props) {
    const [username, setUsername] = useState(props.defaults.passedUsername);
    const [email, setEmail] = useState(props.defaults.passedEmail);
    const [address, setAddress] = useState(props.defaults.passedAddress);
    const [mobile, setMobile] = useState(props.defaults.passedMobile);
    const [city, setCity] = useState(props.defaults.passedCity);

    function submitClickHandler() {
        const objectToAdd = {
            username,
            email,
            address,
            mobile,
            city
        }
        props.addUser(objectToAdd)
    }
    return (
        <BackGround>
            <label htmlFor='username'>USERNAME</label>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <label htmlFor='email'>EMAIL</label>
            <input value={email} onChange={e => setEmail(e.target.value)} />
            <label htmlFor='mobile'>Mobile</label>
            <input value={mobile} onChange={e => setMobile(e.target.value)} />
            <label htmlFor='address'>ADDRESS</label>
            <input value={address} onChange={e => setAddress(e.target.value)} />
            <label htmlFor='city'>CITY</label>
            <input value={city} onChange={e => setCity(e.target.value)} />
            <Submit onClick={submitClickHandler}>ADD</Submit>
        </BackGround>
    )
}

export default Form
