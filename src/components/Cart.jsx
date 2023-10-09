import React, { useState, useContext } from 'react';
import { CartContext } from '../App';
import './Shop.css';

const ShoppingCart = () => {
    const { cart, setCart, removeFromCart } = useContext(CartContext); // Usar el contexto para obtener el carrito

    const [discountCode, setDiscountCode] = useState(''); // Código de descuento
    const [discount, setDiscount] = useState(0); // Descuento aplicado
    const taxRate = 0.21; // IVA (21%)

    // Subtotal
    const subtotal = cart.reduce((total, item) => total + item.price, 0);

    // Calcular el total con impuestos y descuento
    const calculateTotal = () => {
        const discountAmount = subtotal * discount;
        const totalWithDiscount = subtotal - discountAmount;
        const totalWithTax = totalWithDiscount * (1 + taxRate);
        return totalWithTax.toFixed(2);
    };

    // Aplicar el descuento
    const applyDiscount = () => {
        const discountCodeUpper = discountCode.toUpperCase();

        // Si el código es "CONSOLELOG.AR", aplicamos un 10% de descuento
        if (discountCodeUpper === 'CONSOLELOG.AR') {
            setDiscount(0.1); // 10% de descuento
        }
        // Agregar más lógica para otros descuentos si es necesario...
    };

    // Función para aumentar la cantidad
    const increaseQuantity = (productId) => {
        // Encuentra el producto en el carrito
        const updatedCart = cart.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        // Actualiza el carrito con la nueva cantidad
        setCart(updatedCart);
    };

    // Función para disminuir la cantidad
    const decreaseQuantity = (productId) => {
        // Encuentra el producto en el carrito
        const updatedCart = cart.map((item) =>
            item.id === productId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        // Actualiza el carrito con la nueva cantidad
        setCart(updatedCart);
    };

    return (
        <div className="site-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="title-section mb-5 col-12">
                        <h2 className="text-uppercase">Carrito de Compras</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-md-block">
                            <div className="table-responsive overflow-x-auto">
                                <table className="table table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th className="product-thumbnail img-shop">Imagen</th>
                                            <th className="product-name">Producto</th>
                                            <th className="product-price">Precio Unidad</th>
                                            <th className="product-quantity">Cantidad</th>
                                            <th className="product-remove">Total</th>
                                            <th className="product-remove">Eliminar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(cart).map((productId) => {
                                            const product = cart[productId];
                                            return (
                                                <tr key={product.id}>
                                                    <td className="product-thumbnail">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="img-fluid"
                                                        />
                                                    </td>
                                                    <td className="product-name">
                                                        <h2 className="h5 text-black">{product.name}</h2>
                                                    </td>
                                                    <td>${product.price.toFixed(2)}</td>
                                                    <td>
                                                        <div className="input-group mb-3 mx-auto" style={{ maxWidth: '120px' }}>
                                                            <div className="input-group mb-3 quantity-controls" style={{ maxWidth: '120px' }}>
                                                                <div className="input-group-prepend">
                                                                    <button onClick={() => decreaseQuantity(product.id)} className="btn btn-outline-primary js-btn-minus" type="button">-</button>
                                                                </div>
                                                                <input type="text" className="form-control text-center" value={product.quantity} readOnly />
                                                                <div className="input-group-append">
                                                                    <button onClick={() => increaseQuantity(product.id)} className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>${(product.price * product.quantity).toFixed(2)}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => removeFromCart(product.id)}
                                                            className="btn btn-primary height-auto btn-sm"
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row mb-5">
                                    {/* <div className="col-md-6 mb-3 mb-md-0">
                                        <button onClick={applyDiscount} className="btn btn-primary btn-sm btn-block">Aplicar descuento</button>
                                    </div> */}
                                    <div className="col-md-6">
                                        <button className="btn btn-outline-primary btn-sm btn-block">Seguir comprando</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="text-black h3" htmlFor="coupon">Cupón</label>
                                        <h5>¿Posees un código de descuento?</h5>
                                        <h6> Ingrésalo acá: </h6>
                                    </div>
                                    <div className="col-md-8 mb-3 mb-md-0">
                                        <input
                                            type="text"
                                            className="form-control py-3"
                                            id="coupon"
                                            placeholder="Código de descuento"
                                            value={discountCode}
                                            onChange={(e) => setDiscountCode(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <button onClick={applyDiscount} className="btn btn-primary btn-sm px-4">Aplicar Cupón</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row justify-content-end">
                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-12 text-right border-bottom mb-5">
                                                <h3 className="text-black h3 text-uppercase">Compra</h3>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <span className="text-black">Subtotal</span>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <strong className="text-black">${subtotal.toFixed(2)}</strong>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <span className="text-black">Descuento</span>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <strong className="text-black">${(subtotal * discount).toFixed(2)}</strong>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-md-6">
                                                <span className="text-black">Total</span>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <strong className="text-black">${calculateTotal()}</strong>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <button className="btn btn-primary btn-lg btn-block" onClick={() => window.location.href = "checkout"}>Proceder con la compra</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ShoppingCart;
