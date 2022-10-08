import React, { useState } from "react";
import { useEffect } from "react";
import './App.css'
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";
// 6940f497
const API_URL = 'http://www.omdbapi.com?apikey=6940f497'
const movie1 = {
    'Title': 'Amazing Spiderman Syndrome',
    'Year': '2012',
    'imdbID': 'tt2586634',
    'Type': 'movie',
    'Poster': 'N/A'
}
const App = ()  => {
    const [movies, setMovies] = useState([])
    const search = async (title) => {
        const response = await fetch('${API_URL}&s=${title}')
        const data = await response.json()
        setMovies.data.search()

    }
    useEffect(()=> {

    },[])
    return (
       <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input
            placeholder="Search for movie"
            value='Superman'
            onChange={()=>{}}
            />
            <img 
            src={searchIcon}
            alt= 'Search'
            onClick={()=>{}}
            />


        </div>
        {
            movies?.length > 0
            ? (
                <div className="container">
          {movies.map((movie)=> {
            <MovieCard movie={movie}/>

          })}
        </div>
        ) : (
            <div className="empty">
                <h2>No movies found</h2>

            </div>
        )


            
            
        
        }
        
       </div>
    )
}
export default App