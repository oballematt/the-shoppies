import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap"

const Nominations = (props) => {
    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <div className="container-fluid d-flex flex-wrap justify-content-around align-items-center">
                <Button onClick={() => setLgShow(true)}>Nominations</Button>
            </div>
            <Modal style={{ color: "black" }} size="lg" show={lgShow} onHide={() => setLgShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Nominated Movies
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                            </div>
                        )}
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default Nominations
