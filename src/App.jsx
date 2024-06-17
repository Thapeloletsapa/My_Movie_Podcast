/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react';
import './App.css'
import SearchIcon from './search.svg'

//5ea9ca27
const API_URL = "http://www.omdbapi.com?apikey=5ea9ca27";

const movie1 = {
  "Title": "Spider-Man Title Reveal",
  "Year": "2021",
  "imdbID": "tt14122734",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNjRjMmQ2NDQtNmI5NC00N2EwLTkwYWQtOTM2OGZjMmI5YmRjXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_SX300.jpg"
}

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
        onClick={()=>{}}
        />
      </div>

      <div className='container'>
        <div className='movie'>

<div>
  <p>{movie1.Year}</p>
</div>

<div>
<img
src={movie1.Poster} 
alt={movie1.Title}
/>
</div>

        </div>
      </div>
    </div>
  )
}

export default App
