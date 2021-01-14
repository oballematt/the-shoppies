import SearchBar from "./Components/Searchbar/SearchBar";
import React, { useEffect, useState } from "react";
import ResultsList from "./Components/ResultsList/ResultsList";
import NominateButton from "./Components/NominateButton/NominateButton"
import Nominations from "./Components/Nominations/Nominations";
import RemoveNomination from "./Components/RemoveNomination/RemoveNomination"
import Alert from "./Components/Alert/Alert"
function App() {
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState('');
  const [nominations, setNominations] = useState([])

  const getMovieRequest = async () => {
    const url = `https://www.omdbapi.com/?s=${movieSearch}&apikey=9d2fd6c8`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    };
  };

  useEffect(() => {
    getMovieRequest(movieSearch);
  }, [movieSearch]);

  useEffect(() => {
    const nominatedMovies = JSON.parse(localStorage.getItem("nominated-movies"));
    if (nominatedMovies) {
      setNominations(nominatedMovies)
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("nominated-movies", JSON.stringify(items))
  };

  const nominateMovie = (movie) => {
    const newNominationsArray = [...nominations, movie];
    setNominations(newNominationsArray);
    saveToLocalStorage(newNominationsArray);
  };

  const removeMovie = (movie) => {
    const newNominationsArray = nominations.filter((nominated) => nominated.imdbID !== movie.imdbID);
    setNominations(newNominationsArray);
    saveToLocalStorage(newNominationsArray);
  };

  useEffect(() => {
    if (nominations.length === 5) {
      document.getElementById("alert").style.setProperty("display", "flex")
    } else if (nominations.length < 5) {
      document.getElementById("alert").style.setProperty("display", "none")
    };
  }, [nominations]);


  return (
    <>
      <div className="container-fluid scroll">
        <SearchBar
          movieSearch={movieSearch}
          setMovieSearch={setMovieSearch} />
        <Alert />
        <div className="row">
          <Nominations length={nominations.length} handleRemoveClick={removeMovie} removeNomination={RemoveNomination} nominations={nominations} />
        </div>
        <div className="row">
          <ResultsList movieSearch={movieSearch} nominations={nominations} movies={movies} handleNominationsClick={nominateMovie} nominateButton={NominateButton} />
        </div>
      </div>
    </>
  );
};

export default App;
