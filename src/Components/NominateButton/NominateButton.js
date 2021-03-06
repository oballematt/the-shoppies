import React from 'react'

const NominateButton = (props) => {
    let isNominated = props.nominations.filter(nomination => nomination.imdbID === props.movie.imdbID).length !== 0

    if (props.nominations.length === 5) {
        return (
            <button style={{ backgroundColor: "green", color: "white" }} disabled className="overlay d-flex align-items-center justify-content-center btn btn-outline-secondary">
                <div>
                    <span className="mr-2 font">Nominations Full</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                </div>
            </button>
        )
    }
    if (!isNominated) {
        return (
            <button onClick={() => props.handleNominationsClick(props.movie)} className="overlay d-flex align-items-center justify-content-center btn btn-outline-secondary">
                <div>
                    <span style={{ color: "black" }} className="mr-2 font">Nominate</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                    </svg>
                </div>
            </button>
        )
    } else {
        return (
            <button style={{ backgroundColor: "green", color: "white" }} disabled className="overlay d-flex align-items-center justify-content-center btn btn-outline-secondary">
                <div>
                    <span className="mr-2 font">Nominated</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                </div>
            </button>
        )
   } 
   
}

export default NominateButton
