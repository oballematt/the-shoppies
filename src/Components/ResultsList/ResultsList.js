import React from "react"


const ResultsList = (props) => {
    return (
       <>
       {props.movies.map((movie, index) =>
        <div className="d-flex justify-content-start m-3">
           <img src={movie.Poster} alt="movie-poster"></img>
       </div>
       )}
       </>
    )
}

export default ResultsList
