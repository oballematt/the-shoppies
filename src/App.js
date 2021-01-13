import SearchBar from "./Components/Searchbar/SearchBar";
import React, { useEffect, useState } from "react";
import ResultsList from "./Components/ResultsList/ResultsList";
import NominateButton from "./Components/NominateButton/NominateButton"
import Nominations from "./Components/Nominations/Nominations";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState('');
  const [nominations, setNominations] = useState([])

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${movieSearch}&apikey=9d2fd6c8`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(movieSearch);
  }, [movieSearch]);

  const nominateMovie = (movie) => {
    const newNominationsArray = [...nominations, movie];
    setNominations(newNominationsArray)
  }


  return (
    <>
      <div className="container-fluid">
        <SearchBar
          movieSearch={movieSearch}
          setMovieSearch={setMovieSearch} />
        <div className="row">
          <Nominations nominations={nominations} />
        </div>
        <div className="row">
          <ResultsList movies={movies} handleNominationsClick={nominateMovie} nominateButton={NominateButton} />
        </div>
      </div>
    </>
  );
};

export default App;
