import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import './App.css'
import firebase from 'firebase/app'
import 'firebase/firestore'
import User from './components/User'
import Form from './containers/Form'
import { NotificationContext } from './Reusable/Notification'
import { v4 } from 'uuid'
const Background_sc = styled.div`
    width:100vw;
    height:100vh;
    background-color:rgb(219, 219, 219);
    overflow-x:hidden;
    .loader,
.loader:after {
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(177,32,32, 0.2);
  border-right: 1.1em solid rgba(177,32,32, 0.2);
  border-bottom: 1.1em solid rgba(177,32,32, 0.2);
  border-left: 1.1em solid #b12020;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`
const UserContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-content:center;
`


function App() {
    const [loading, seLoading] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [formStatus, setFormStatus] = useState('none')
    const [users, setUsers] = useState([]);
    const [passedData, setPassedData] = useState({})
    const [editId, setEditId] = useState('');
    function addUserHander() {
        setPassedData({
            passedUsername: '',
            passedEmail: '',
            passedAddress: '',
            passedMobile: '',
            passedCity: ''
        })
        setShowForm(showForm => !showForm);
        setFormStatus('add-user')

    }
    function submitHandler(passedObj) {
        switch (formStatus) {
            case 'add-user':
                firebase.firestore().collection('tbl_users').add(passedObj).then(
                    res => nofificationDispatch(
                        {
                            type: 'ADD-NOTIFICATION',
                            payload: { msg: "User added successfully", type: 'green', id: v4() }
                        }
                    )
                ).catch(
                    err => console.log(err)
                )
                setFormStatus('none')
                break;
            case 'edit-user':
                firebase.firestore().collection('tbl_users').doc(editId).update(passedObj).then(
                    res => nofificationDispatch(
                        {
                            type: 'ADD-NOTIFICATION',
                            payload: { msg: "User updated successfully", type: 'green', id: v4() }
                        }
                    )
                ).catch(
                    err => console.log(err)
                )
                setFormStatus('none')
                break;
            default:
                setFormStatus('none')
        }

    }
    function editUserHander(userId) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === userId) {
                setPassedData({
                    passedUsername: users[i].username,
                    passedEmail: users[i].email,
                    passedAddress: users[i].address,
                    passedMobile: users[i].mobile,
                    passedCity: users[i].city
                })
            }
            setFormStatus('edit-user');
            setShowForm(showForm => !showForm);
            setEditId(userId);

        }
    }
    function deleteUserHandler(userId) {
        firebase.firestore().collection('tbl_users').doc(userId).delete().then(
            res => nofificationDispatch(
                {
                    type: 'ADD-NOTIFICATION',
                    payload: { msg: "User deleted successfully", type: 'green', id: v4() }
                }
            )
        )
    }

    let nofificationDispatch = useContext(NotificationContext)



    useEffect(() => {
        seLoading(true)
        firebase.firestore().collection('tbl_users').onSnapshot(
            docsHolder => {
                seLoading(false)
                let usersArr = []
                docsHolder.docs.map((doc) => {
                    let obj = doc.data();
                    obj.id = doc.id;
                    usersArr.push(obj)
                })
                setUsers(usersArr)
            }
        )
    }, [])

    let mainSection = <UserContainer>
        {users.map(singeUser => <User
            key={singeUser.id}
            info={singeUser}
            editUser={editUserHander}
            deleteUser={deleteUserHandler} />)}
    </UserContainer>
    if (loading) {
        mainSection = <div className="loader">Loading...</div>
    }


    return (
        <Background_sc>
            <Header addUser={addUserHander} />
            {formStatus !== 'none' && <Form defaults={passedData} addUser={submitHandler} />}
            {mainSection}
        </Background_sc>
    )

}

export default App
