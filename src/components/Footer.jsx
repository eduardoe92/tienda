import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function getCurrentDate() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString(undefined, options);
}

const PromoSection = () => {
    const [currentDate, setCurrentDate] = useState(getCurrentDate());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(getCurrentDate());
        }, 1000 * 60);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h3 className="footer-heading mb-4">Promo</h3>
            <Link to="/" className="block-6">
                <img src="images/about_1.jpg" alt="Img" className="img-fluid rounded mb-4" />
                <h3 className="font-weight-light  mb-0">Encuentra las mejores ofertas del día</h3>
                <p>Promoción válida solo para el día: <br/> {currentDate}</p>
            </Link>
        </div>
    );
};

const QuickLinksSection = () => (
    <div className="col-lg-5 ml-auto mb-5 mb-lg-0">
        <div className="row">
            <div className="col-md-12">
                <h3 className="footer-heading mb-4">Enlaces Rápidos</h3>
            </div>
            <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                    <li><Link to="/shopping">Carrito de compras</Link></li>
                    <li><Link to="/">Tienda</Link></li>
                </ul>
            </div>
            <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                    <li><Link to="/">Comercio movil</Link></li>
                    <li><Link to="/">Envío directo</Link></li>
                </ul>
            </div>
            <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                    <li><Link to="/">Punto de venta</Link></li>
                    <li><Link to="/">Vender en linea</Link></li>
                </ul>
            </div>
        </div>
    </div>
);

const ContactInfoSection = () => (
    <div className="col-md-6 col-lg-3">
        <div className="block-5 mb-5">
            <h3 className="footer-heading mb-4">Información de contacto</h3>
            <ul className="list-unstyled">
                <li className="address">Av. 9 de Julio, Ciudad Autónoma de Buenos Aires, Argentina</li>
                <li className="phone"><Link to="tel://23923929210">+54 11 2345 6789</Link></li>
                <li className="email">contact@shopmax.com</li>
            </ul>
        </div>
        <div className="block-7">
            <form action="#" method="post">
                <label htmlFor="email_subscribe" className="footer-heading">Subscríbete</label>
                <div className="form-group">
                    <input type="text" className="form-control py-4" id="email_subscribe" placeholder="Email" />
                    <input type="submit" className="btn btn-sm btn-primary" value="Enviar" />
                </div>
            </form>
        </div>
    </div>
);

const Footer = () => (
    <footer className="site-footer custom-border-top">
        <div className="container">
            <div className="row">
                <PromoSection />
                <QuickLinksSection />
                <ContactInfoSection />
            </div>
            <div className="row pt-1 mt-1 text-center">
                <div className="col-12">
                    <p>
                        Copyright &copy;{new Date().getFullYear()} Todos los derechos reservados
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
