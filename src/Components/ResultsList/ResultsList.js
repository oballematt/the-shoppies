import React from "react"


const ResultsList = (props) => {
    const NominateButton = props.nominateButton
    return (
       <>
       {props.movies.map((movie, index) =>
        <div className=" image-container d-flex justify-content-center align-items-center m-3">
           <img src={movie.Poster} alt="movie-poster"></img>
           <div onClick={() => props.handleNominationsClick(movie)} className="overlay d-flex align-items-center justify-content-center">
               <NominateButton />
           </div>
       </div>
       )}
       </>
      
    )
}

export default ResultsList
