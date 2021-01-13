import SearchBar from "./Components/Searchbar/SearchBar"
import React, { useEffect, useState } from "react"
import ResultsList from "./Components/ResultsList/ResultsList"

function App() {
  const [movies, setMovies] = useState([])
  const [movieSearch, setMovieSearch] = useState("")

 const getMovieRequest = async () => {
   const url = "http://www.omdbapi.com/?s=star wars&apikey=9d2fd6c8"
   const response = await fetch(url)
   const responseJson = await response.json()
   console.log(responseJson)
 };

 useEffect(() => {
  getMovieRequest()
 },[])


  return (
    <div className="container-fluid movie-scroll">
      <SearchBar />
      <div className="row">
        <ResultsList movies={movies} />
      </div>
    </div>
  );
};

export default App;
