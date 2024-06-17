/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react';
import './App.css'


//5ea9ca27
const API_URL = "http://www.omdbapi.com?apikey=5ea9ca27";

const App = () => {
  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json();

    console.log(data)
  }

useEffect(() =>{
   
}, []);

  return (
    <h1>App</h1>
  )
}

export default App
