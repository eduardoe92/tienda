import React from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

const DiscoveryCollection = () => {
    return (
        <div className="site-section">
            <div className="container">
                <div className="title-section mb-5">
                    <h2 className="text-uppercase"><span className="d-block">Descubre</span> Nuestras colecciones</h2>
                </div>
                <div className="row align-items-stretch">
                    <div className="col-lg-4">
                        <div className="product-item sm-height full-height bg-gray">
                            <Link to="/categoria/women" className="product-category text-category">
                                Damas
                            </Link>
                            <img src="images/model_4.png" alt="Dama" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="product-item sm-height bg-gray mb-4">
                            <Link to="/categoria/handbags" className="product-category">
                                Carteras
                            </Link>
                            <img src="images/prod_1.png" alt="Carteras" className="img-fluid" />
                        </div>
                        <div className="product-item sm-height bg-gray">
                            <Link to="/categoria/shoes" className="product-category">
                                Calzado
                            </Link>
                            <img src="images/hero_1.png" alt="Calzado" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4 colmen">
                        <div className="product-item sm-height full-height bg-gray">
                            <Link to="/categoria/men" className="product-category">
                                Caballeros
                            </Link>
                            <img src="images/model_5.png" alt="Caballeros" className="img-fluid img-men" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoveryCollection;
