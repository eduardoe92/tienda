import React from 'react';
import { useParams } from 'react-router-dom';
import Products from './Products';
import './Shop.css';

const CategoryPage = () => {
    const { category } = useParams();
    const categoryParam = category.toLowerCase();

    const categoryProducts = Products.filter((product) => {
        if (Array.isArray(product.category)) {
            return product.category.includes(categoryParam);
        } else {
            return product.category === categoryParam;
        }
    });

    return (
        <div className="container">
            <div className="title-section mb-5 col-12">
                <h2 className="text-uppercase">{categoryParam}</h2>
            </div>
            <div className="row">
                {categoryProducts.map((product) => (
                    <div key={product.id} className="col-lg-4 col-md-6 item-entry mb-4">
                        <div className="product-item md-height bg-gray d-block">
                            <img src={product.image} alt={`Imagen de ${product.name}`} />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h2 className="item-title">{product.name}</h2>
                                {product.discountPrice ? (
                                    <strong className="item-price">
                                        <del>${product.discountPrice.toFixed(2)}</del>
                                    </strong>
                                ) : null}
                                <strong className="item-price">${product.price.toFixed(2)}</strong>
                            </div>
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;