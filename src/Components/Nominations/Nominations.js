import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap"

const Nominations = (props) => {
    const [lgShow, setLgShow] = useState(false);
    const RemoveNomination = props.removeNomination
    return (
        <>
            <div className="container-fluid d-flex flex-wrap justify-content-around align-items-center">
                <button className="btn btn-outline-secondary btn-lg" style={{width:"300px", height:"100px" }}onClick={() => setLgShow(true)}>Nominations {`(${props.length})`}</button>
            </div>

            <Modal style={{ color: "black" }} size="lg" show={lgShow} onHide={() => setLgShow(false)}>

                <Modal.Header style={{ color: "white" }} className="bg-dark" closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Nominated Movies
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#141414" }}>
                    {props.nominations.length ? (
                        <div className="container-fluid d-flex flex-wrap justify-content-around align-items-center">
                            {props.nominations.map((nominations) =>
                                <div className="image-container m-3">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={nominations.Poster} className="card-img-top" alt="movie-poster" />
                                        <div className="card-body">
                                            <h5 className="card-title">{nominations.Title}</h5>
                                            <p className="card-text">{nominations.Year}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => props.handleRemoveClick(nominations)} className="overlay d-flex align-items-center justify-content-center btn btn-outline-secondary">
                                        <RemoveNomination />
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                            <h3 style={{ color: "white" }}>Please add some movies!</h3>
                        )}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Nominations
