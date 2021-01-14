import React from "react"

const ResultsList = (props) => {
    const NominateButton = props.nominateButton
    const nominations = props.nominations
    let text = props.movieSearch
    text = text.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')

    return (
        <>
            <div className="container-fluid">
                <h1 className="font">Results for {`"${text}"`}</h1>
            </div>
            {props.movies.map((movie) =>
                <div key={movie.imdbID} className="image-container d-flex justify-content-center align-items-center m-3">
                    <img src={movie.Poster} alt="movie-poster"></img>
                    <NominateButton nominations={nominations} movie={movie} handleNominationsClick={props.handleNominationsClick} />
                </div>
            )}
        </>

    )
}

export default ResultsList
