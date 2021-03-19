import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'
import 'firebase/firestore'
import NotifProvider from './Reusable/Notification'
const firebaseConfig = {
  apiKey: "AIzaSyD4qlIYIVfjaV0tYHdpVXIwv1wXatC3fF4",
  authDomain: "rahul-bajaj.firebaseapp.com",
  projectId: "rahul-bajaj",
  storageBucket: "rahul-bajaj.appspot.com",
  messagingSenderId: "776698269147",
  appId: "1:776698269147:web:34d349e906cdbc3c23abfe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <NotifProvider>
    <App />
  </NotifProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
