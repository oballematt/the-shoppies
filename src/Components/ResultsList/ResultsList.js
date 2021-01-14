import React from "react"

const ResultsList = (props) => {
    const NominateButton = props.nominateButton
    const nominations = props.nominations
  
    return (
       <>
       {props.movies.map((movie, index) =>
        <div key={movie.imdbID} className=" image-container d-flex justify-content-center align-items-center m-3">
           <img src={movie.Poster} alt="movie-poster"></img>
               <NominateButton nominations={nominations} movie={movie} handleNominationsClick={props.handleNominationsClick} />
       </div>
       )}
       </>
      
    )
}

export default ResultsList
