import React, { useContext } from 'react';
import './css/bootstrap/bootstrap-grid.css'
import './css/bootstrap/bootstrap-reboot.css'
import './style.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../App';

export const Navbar = () => {
    const { cart } = useContext(CartContext);

    return (

        <div className="site-navbar bg-white py-2" >
            <div className="search-wrap">
                <div className="container">
                    <Link to="/" className="search-close js-search-close"><span className="icon-close2"></span></Link>
                    <form action="/" method="post">
                        <input type="text" className="form-control" placeholder="Ingresa acá lo que deseas buscar..." />
                    </form>
                </div>
            </div>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <div className="site-logo">
                            <Link to="/" className="js-logo-clone">ShopMax</Link>
                        </div>
                    </div>
                    <div className="main-nav d-none d-lg-block">
                        <nav className="site-navigation text-right text-md-center" role="navigation">
                            <ul className="site-menu js-clone-nav d-none d-lg-block">
                                <li className="has-children active">
                                    <Link to="/">Home</Link>
                                    <ul className="dropdown">
                                        <li><Link to="/">Menu One</Link></li>
                                        <li><Link to="/">Menu Two</Link></li>
                                        <li><Link to="/">Menu Three</Link></li>
                                        <li className="has-children">
                                            <Link to="/">Sub Menu</Link>
                                            <ul className="dropdown">
                                                <li><Link to="/">Menu One</Link></li>
                                                <li><Link to="/">Menu Two</Link></li>
                                                <li><Link to="/">Menu Three</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link to="/">Tienda</Link></li>
                                <li><Link to="/">Catalogo</Link></li>
                                <li><Link to="/">Nuevo</Link></li>
                                <li><Link to="/contact">Contacto</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="icons">
                        <Link to="/" className="icons-btn d-inline-block js-search-open"><span className="icon-search"></span></Link>
                        <Link to="/" className="icons-btn d-inline-block"><span className="icon-heart-o"></span></Link>
                        <Link to="/shopping" className="icons-btn d-inline-block bag">
                            <span className="icon-shopping-bag"></span>
                            <span className="number">{cart.length}</span>
                        </Link>
                        <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span className="icon-menu"></span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}