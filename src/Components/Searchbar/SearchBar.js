import React from 'react'
const SearchBar = (props) => {

    return (
        <div className="bg-dark p-5 rounded-lg m-3 text-center font">
            <h1 className="display-3">The Shoppies</h1>
            <p className="lead">Browse your favorite movies below!</p>
            <p>Nominate 5 movies  for the shoppies awards!</p>
            <hr className="my-4" />
            <div className="input-group">
                <input type="text" style={{ fontSize: "larger" }} className="form-control rcorners" placeholder="Search for Movies here!" onChange={(event) => props.setMovieSearch(event.target.value)} value={props.value} aria-describedby="basic-addon1" />
            </div>
        </div>
    )
}

export default SearchBar

