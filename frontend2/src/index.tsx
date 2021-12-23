import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { getFirestore, collection, doc, getDocs, Firestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZlCer2ykUEnepEmZhQCk-sNbMQc2HuQc",
  authDomain: "tft-project-e7b1c.firebaseapp.com",
  projectId: "tft-project-e7b1c",
  storageBucket: "tft-project-e7b1c.appspot.com",
  messagingSenderId: "312977331980",
  appId: "1:312977331980:web:8e63c2f19e5b2c19db9b29",
  measurementId: "G-45HSKGLWTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
