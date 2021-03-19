import React from 'react'
import styled from 'styled-components'
const Card = styled.div`
    width:80%;
    border-radius:30px;
    display:flex;
    flex-direction:column;
    border:1px solid black;
    padding:10px 5%;
    text-align:leftj;
    margin: 3px auto;
    position: relative;
    .edit-btn {
        background-color: rgba(99, 153, 121,0.5);
        color:green;
        position:absolute;
        top:20%;
        width:10%;
        right:3%;
        border-radius:17px;
        text-transform:uppercase;
        @media(max-width:600px){
            right:15%;
            width:20%;
        }
        &:hover{
            box-shadow:4px 3px 20px rgba(0,0,0,0.4);
            color:rgb(208, 255, 0);
        }
    }
    .del-btn {
        background-color:rgba(153, 99, 99,0.5);
        color:red;
        position:absolute;
        width:10%;
        top:60%;
        border-radius:17px;
        text-transform:uppercase;
        right:3%;
        &:hover{
            box-shadow:4px 3px 20px rgba(0,0,0,0.4);
            color:yellow;
        }
        @media(max-width:600px){
            right:15%;
            width:20%;
        }
    }
`
const Single = styled.span`
    display:block;

`


function User(props) {
    const propertyArr = Object.keys(props.info);
    return (
        <Card>
            Username : {props.info.username}<br />
            Email : {props.info.email}<br />
            Address : {props.info.address}<br />
            City : {props.info.city}<br />
            Mobile : {props.info.mobile}<br />
            <button className='edit-btn' onClick={e => props.editUser(props.info.id)}>
                edit
                </button>
            <button className='del-btn' onClick={e => props.deleteUser(props.info.id)}>
                delete
            </button>
        </Card>
    )
}

export default User
