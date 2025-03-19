import React, { useState } from "react";
import { Modal } from "react-bootstrap";


export default function Pizza({ pizza }) {
    const [quantity, setquantity] = useState(1);
    const [varient, setvarient] = useState('small');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='m-5 shadow-lg p-3 mb-5 bg-white rounded'>
            {/* Pizza Name & Image */}
            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} className="img-fluid" style={{ height: '200px', width: '200px' }} alt={pizza.name} />
            </div>

            {/* Variants & Quantity Section */}
            <div className="d-flex justify-content-between align-items-center">
                
                {/* Variants Dropdown */}
                <div className="w-50">
                    <p>Variants</p>
                    <div className="position-relative">
                        <select
                            className="form-control custom-select"
                            value={varient}
                            onChange={(e) => setvarient(e.target.value)}
                        >
                            {pizza.varients.map((varient, index) => (
                                <option key={index} value={varient}>{varient}</option>
                            ))}
                        </select>
                        <span className="dropdown-arrow">&#9662;</span>
                    </div>
                </div>

                {/* Quantity Dropdown */}
                <div className="w-50 text-end">
                    <p>Quantity</p>
                    <div className="position-relative">
                        <select
                            className="form-control custom-select"
                            value={quantity}
                            onChange={(e) => setquantity(e.target.value)}
                        >
                            {[...Array(10).keys()].map((x, i) => (
                                <option key={i} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>
                        <span className="dropdown-arrow">&#9662;</span>
                    </div>
                </div>
            </div>

            {/* Price & Add to Cart Section */}
            <div className="d-flex justify-content-between align-items-center mt-3">
                <h1 className='mt-1'>Price: {pizza.prices[0][varient] * quantity} Rs/-</h1>
                <button className="btn btn-primary">ADD TO CART</button>
            </div>

            {/* Modal for Pizza Details */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} className="img-fluid" style={{ height: '400px' }} alt={pizza.name} />
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}