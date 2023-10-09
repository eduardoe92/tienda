import React from 'react';
import Products from './Products';

const PopularProducts = ({ addToCart }) => {
    const popularProducts = Products.slice(0, 6);

    return (
        <div className="site-section">
            <div className="container">
                <div className="row">
                    <div className="title-section mb-5 col-12">
                        <h2 className="text-uppercase">Nuestros Productos más Populares</h2>
                    </div>
                </div>
                <div className="row">
                    {popularProducts.map((product) => (
                        <div key={product.id} className="col-lg-4 col-md-6 item-entry mb-4">
                            <a href="/" className="product-item md-height bg-gray d-block">
                                <img src={product.image} alt="ImageProduct" className="img-fluid" />
                            </a>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <h2 className="item-title"><a href="/">{product.name}</a></h2>
                                    {product.discountPrice ? (
                                        <strong className="item-price">
                                            <del>${product.discountPrice.toFixed(2)}</del> ${product.price.toFixed(2)}
                                        </strong>
                                    ) : (
                                        <strong className="item-price">${product.price.toFixed(2)}</strong>
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

export default PopularProducts;
