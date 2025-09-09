import React from "react";
import Home from "./components/Home";
import Navbar from './Navbar'
import './App.css'
import { Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import Card from "./components/Card";


function App() {
  return (
    <>
    <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='/card' element={<Card/>}></Route>
       </Routes>
    </>
   
   
  );
}

export default App;
