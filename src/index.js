import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app'
import 'firebase/firestore'
import { BrowserRouter } from 'react-router-dom'

var firebaseConfig = {
  apiKey: "AIzaSyBBeRwGanflP490GDOSqHM1mR_AQLfUJOE",
  authDomain: "authentication-774dc.firebaseapp.com",
  projectId: "authentication-774dc",
  storageBucket: "authentication-774dc.appspot.com",
  messagingSenderId: "110495326292",
  appId: "1:110495326292:web:e5425106e8fe04f419cdc1"
};
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


