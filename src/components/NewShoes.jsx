import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

const NewShoes = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="site-blocks-cover inner-page py-5" data-aos="fade">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ml-auto order-md-2 align-self-start">
                        <div className="site-block-cover-content d-flex flex-column justify-content-center align-items-center">
                            <h2 className="sub-title">#Nueva Colección Verano {currentYear}</h2>
                            <h1>NUEVOS CALZADOS</h1>
                            <p><Link to="/categoria/shoes" className="btn btn-black rounded-5">Ingresa acá</Link></p>
                        </div>
                    </div>
                    <div className="col-md-6 order-1 align-self-end">
                        <img src="images/model_6.png" alt="Imag" className="img-fluid img-shoes" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewShoes;
