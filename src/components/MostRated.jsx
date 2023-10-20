import React from 'react';
import Products from './Products';
import { Link } from 'react-router-dom';

const MostRated = ({ addToCart }) => {
    return (
        <div className="site-section">
            <div className="container">
                <div className="row">
                    <div className="title-section mb-5 col-12">
                        <h2 className="text-uppercase">Más valoradas por nuestros clientes</h2>
                    </div>
                </div>
                <div className="row">
                    {Products.map((product) => (
                        <div key={product.id} className="col-lg-4 col-md-6 item-entry mb-4">
                            <Link to={`/product/${product.id}`} className="product-item md-height bg-gray d-block">
                                <img src={product.image} alt="ImageProduct" className="img-fluid" />
                            </Link>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <Link to={`/product/${product.id}`}>
                                        <h2 className="item-title"><a href="/">{product.name}</a></h2>
                                    </Link>
                                    {product.discountPrice ? (
                                        <strong className="item-price">
                                            <del>${product.discountPrice.toFixed(2)}</del> ${product.price.toFixed(2)}
                                        </strong>
                                    ) : (
                                        <strong className="item-price">${product.price.toFixed(2)}</strong>
                                    )}
                                    {product.rating && (
                                        <div className="star-rating">
                                            {Array.from({ length: product.rating }, (_, index) => (
                                                <span key={index} className="icon-star2 text-warning"></span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <button className="btn btn-primary" onClick={() => addToCart(product)}>Agregar</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MostRated;
