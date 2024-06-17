/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react';
import './App.css'
import SearchIcon from './search.svg'

//5ea9ca27
const API_URL = "http://www.omdbapi.com?apikey=5ea9ca27";

const App = () => {
  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json();

    console.log(data.Search)
  }

useEffect(() =>{
 searchMovies('Hulk');  
}, []);

  return (
    <div className='app'>
      <h1>Bioskop</h1>

      <div className='search'>
        <input 
        value = "Superman"
        placeholder = 'Search for a movie...' 
        onChange = {()=>{}}
        />
        <img 
        src={SearchIcon} 
        alt='search icon' 
        />
      </div>
    </div>
  )
}

export default App
