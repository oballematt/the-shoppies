import React from 'react'
const SearchBar = (props) => {
    
    return (
        <div className="bg-dark p-5 rounded-lg m-3 text-center">
            <h1 className="display-4 ">The Shoppies</h1>
            <p className="lead">Browse your favorite movies below!</p>
            <hr className="my-4" />
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search for Movies!" onChange={(event) => props.setMovieSearch(event.target.value)} value={props.value} aria-describedby="basic-addon1"/>
            </div>
        </div>


    )
}

export default SearchBar

